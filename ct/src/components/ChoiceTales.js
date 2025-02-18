import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Volume2 } from 'lucide-react';
import './ChoiceTales.css';

const ChoiceTales = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
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
          {/* Individual button containers */}
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
              NEW GAME
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
    </div>
  );
};

export default ChoiceTales;