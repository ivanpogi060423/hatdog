import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Volume2 } from 'lucide-react';
import '../styles/ChoiceTales.css';

const ChoiceTales = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [audioSettings, setAudioSettings] = useState({
    soundEffects: 75,
    music: 90,
    voice: 80
  });

  const handleVolumeChange = (type, value) => {
    setAudioSettings(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className="choicetales-container">
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/UI.png)`
        }}
      />
  
      <div className="content-container">
        <div className="buttons-wrapper">
          <div 
            className="button-container"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/UI/3.png)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: '20px',
              width: '300px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '15px 0'
            }}
          >
            <button className="menu-button" onClick={() => navigate('/story')}>
              CONTINUE
            </button>
          </div>
  
          <div 
            className="button-container"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/UI/3.png)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: '20px',
              width: '300px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '15px 0'
            }}
          >
            <button className="menu-button" onClick={() => navigate('/story')}>
              NEW QUEST
            </button>
          </div>
  
          <div 
            className="button-container"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/UI/3.png)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: '20px',
              width: '300px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '15px 0'
            }}
          >
            <button className="menu-button" onClick={() => setShowSettings(true)}>
              SETTINGS
            </button>
          </div>

          <div 
            className="button-container"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/UI/3.png)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: '20px',
              width: '300px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '15px 0'
            }}
          >
            <button className="menu-button" onClick={() => setShowAbout(true)}>
              ABOUT
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="settings-modal">
          <div className="modal-content">
            <h2 className="settings-title">SETTINGS</h2>
            
            <div className="volume-controls">
              {Object.entries(audioSettings).map(([type, value]) => (
                <div key={type} className="volume-control">
                  <label className="volume-label">
                    {type.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={(e) => handleVolumeChange(type, parseInt(e.target.value))}
                      className="volume-slider"
                    />
                    <Volume2 color="#ffd700" size={20} />
                  </div>
                </div>
              ))}
            </div>

            <button className="close-button" onClick={() => setShowSettings(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {showAbout && (
        <div className="settings-modal">
          <div className="modal-content">
            <h2 className="settings-title">About Choice Tales</h2>
            
            <div className="about-content">
              <p>Welcome to Choice Tales - where your choices shape the story!</p>
              
              <h3>What is Choice Tales?</h3>
              <p>Choice Tales is an interactive storytelling platform where every decision you make influences the narrative. Dive into magical worlds and create your own unique adventure!</p>
              
              <h3>Features:</h3>
              <ul>
                <li>Multiple storylines and endings</li>
                <li>Rich, immersive narratives</li>
                <li>Beautiful artwork and animations</li>
                <li>Engaging sound effects and music</li>
                <li>Family-friendly content</li>
              </ul>
              
              <h3>How to Play:</h3>
              <p>Simply read through the story and make choices when prompted. Each choice affects your journey and leads to different outcomes. There's no "right" or "wrong" - just your unique adventure!</p>
              
              <p className="version">Version Beta 1.0</p>
            </div>

            <button className="close-button" onClick={() => setShowAbout(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoiceTales;