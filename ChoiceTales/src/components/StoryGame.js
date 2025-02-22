import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameLogic } from '../hooks/useGameLogic';
import '../styles/StoryGame.css';

const StoryGame = () => {
  const navigate = useNavigate();
  const {
    currentScene, 
    inventory, 
    claimedItem,
    transitionToScene, 
    collectItem
  } = useGameLogic();

  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleSceneTransition = (choice) => {
    if (choice.requirement && !checkRequirements(choice.requirement)) {
      alert("You're not prepared for this adventure!");
      return;
    }
    transitionToScene(choice.nextScene, choice.gameStateUpdate);
  };

  const checkRequirements = (requirement) => {
    if (requirement.items) {
      return requirement.items.every(item => inventory.includes(item));
    }
    return true;
  };

  const handleCollectItem = (itemId) => {
    collectItem(itemId);
    if (currentScene.items) {
      currentScene.items = currentScene.items.filter(item => item !== itemId);
    }
  };

  const getItemName = (itemId) => {
    const itemNames = {
      'old_map': 'Old Treasure Map',
      'compass': 'Compass',
      'sandwich': 'Sandwich'
    };
    return itemNames[itemId] || itemId;
  };

  const handleMainMenu = () => {
    localStorage.setItem('gameProgress', JSON.stringify({
      currentScene: currentScene.id,
      inventory: inventory
    }));
    navigate('/');
  };

  return (
    <div 
      className="story-game"
      style={{ 
        backgroundImage: `url(${currentScene.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Pause Button */}
      <button 
        className="pause-button"
        onClick={() => setIsPaused(true)}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/images/UI/pause.png`}
          alt="Pause"
        />
      </button>

      {/* Pause Menu */}
      {isPaused && (
        <div className="pause-overlay">
          <div className="pause-menu">
            <h2>Game Paused</h2>
            <div className="pause-buttons">
              <button onClick={() => setIsPaused(false)}>Resume</button>
              <button onClick={() => setShowSettings(true)}>Settings</button>
              <button onClick={handleMainMenu}>Main Menu</button>
            </div>
          </div>
        </div>
      )}

      {/* Inventory Section */}
      <div className="inventory-section" style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>
        <button onClick={() => setIsInventoryOpen(!isInventoryOpen)}>
          {isInventoryOpen ? 'Close Inventory' : 'Open Inventory'}
        </button>
        {isInventoryOpen && (
          <div className="inventory">
            <h3 style={{ fontSize: '16px', margin: '0' }}>Inventory</h3>
            {inventory.length === 0 ? (
              <p>No items in inventory.</p>
            ) : (
              inventory.map(itemId => (
                <div key={itemId} className="inventory-item">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/items/${itemId}.png`} 
                    alt={`Item ${itemId}`} 
                    style={{ width: itemId === 'old_map' ? '340px' : itemId === 'compass' ? '100px' : 'auto', height: itemId === 'old_map' ? '200px' : itemId === 'compass' ? '100px' : 'auto' }} 
                  />
                  <p style={{ fontSize: '14px' }}>{getItemName(itemId)}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Scene Content */}
      <div className="scene-content">
        <div 
          dangerouslySetInnerHTML={{ __html: currentScene.text }} 
          className="larger-text"
        />

        {/* Character Images */}
        {currentScene.characterImages && Object.entries(currentScene.characterImages).map(([character, image], index, array) => {
          // Calculate position based on number of characters
          let position = {};
          if (array.length === 1) {
            // Single character - center
            position = { left: '50%', transform: 'translateX(-50%)' };
          } else if (array.length === 2) {
            // Two characters - left and right
            position = index === 0 ? { left: '10%' } : { right: '10%' };
          } else {
            // More than two characters - distribute evenly
            const isLeft = index < array.length / 2;
            position = isLeft 
              ? { left: `${2 + (index * 15)}%` }
              : { right: `${5 + ((array.length - 1 - index) * 15)}%` };
          }

          return (
            <div
              key={character}
              style={{
                position: 'absolute',
                bottom: '0%', // Add bottom positioning
                zIndex: 2,
                ...position,
                transition: 'all 0.3s ease' // Smooth transition for position changes
              }}
            >
              <img
                src={image}
                alt={character}
                style={{
                  height: '600px', // Fixed height for consistency
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          );
        })}

        {/* Collectible Items */}
        {currentScene.items && currentScene.items
          .filter(itemId => !inventory.includes(itemId))
          .map(itemId => (
            <div 
              key={itemId} 
              onClick={() => handleCollectItem(itemId)}
              className="collectible-item"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/images/items/${itemId}.png`} 
                alt={`Item ${itemId}`} 
                style={{ width: itemId === 'old_map' ? '340px' : itemId === 'compass' ? '100px' : 'auto', height: itemId === 'old_map' ? '200px' : itemId === 'compass' ? '100px' : 'auto' }} 
              />
            </div>
          ))
        }

        {/* Scene Choices */}
        <div className="scene-choices">
          {currentScene.choices.map(choice => (
            <button 
              key={choice.text}
              onClick={() => handleSceneTransition(choice)}
              className="choice-button"
            >
              {choice.text}
            </button>
          ))}
        </div>

        {/* Claimed Item Notification */}
        {claimedItem && (
          <div className="item-claim-notification">
            {getItemName(claimedItem)} has been claimed!
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryGame;