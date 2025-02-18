import React, { useState } from 'react';
import { useGameLogic } from '../hooks/useGameLogic';

const StoryGame = () => {
  const {
    currentScene, 
    inventory, 
    claimedItem,
    transitionToScene, 
    collectItem
  } = useGameLogic();

  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log("Current Scene:", currentScene); // Debugging log

  const handleSceneTransition = (choice) => {
    console.log("Choice made:", choice); // Debugging log
    if (choice.requirement && !checkRequirements(choice.requirement)) {
      alert("You're not prepared for this adventure!");
      return;
    }
    transitionToScene(choice.nextScene, choice.gameStateUpdate);
  };

  const checkRequirements = (requirement) => {
    // Implement requirement checking logic
    if (requirement === 'supplies') {
      return inventory.includes('compass'); // Example requirement check
    }
    return true;
  };

  const handleCollectItem = (itemId) => {
    collectItem(itemId);
    // Remove the item from the current scene's items
    currentScene.items = currentScene.items.filter(item => item !== itemId);
  };

  const getItemName = (itemId) => {
    if (itemId === 'old_map') {
      return 'Old Treasure Map';
    }
    if (itemId === 'compass') {
      return 'Compass';
    }
    if (itemId === 'sandwich'){
      return 'Sandwich';
    }
    return itemId;
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
      {/* Inventory Section in Upper Left */}
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



      <div className="scene-content">
        <div dangerouslySetInnerHTML={{ __html: currentScene.text }} 
        className="larger-text"/> {/* REPLACED H2 WITH THIS */}

        
        {/* Item Collection */}
        {currentScene.items && currentScene.items
          .filter(itemId => !inventory.includes(itemId)) // Only show items not in inventory
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