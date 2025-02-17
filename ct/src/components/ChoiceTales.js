import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Volume2 } from 'lucide-react';

const ChoiceTales = () => {
  const navigate = useNavigate();
  const [audioSettings, setAudioSettings] = useState({
    soundEffects: 75,
    music: 90,
    voice: 80
  });

  const [showSettings, setShowSettings] = useState(false);

  const handleVolumeChange = (type, value) => {
    setAudioSettings(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src={`${process.env.PUBLIC_URL}/images/backgrounds/Fantasy_forest_background.jpg`}
        alt="Fantasy forest background" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Main Menu */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Title */}
        <h1 className="text-6xl font-serif text-yellow-200 mb-16 tracking-wider drop-shadow-lg">
          Welcome to the world of
          <div className="text-8xl mt-2 text-center">Choice Tales</div>
        </h1>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-6 w-80">
          <button 
            className="bg-yellow-100 hover:bg-yellow-200 text-gray-800 px-8 py-4 rounded-lg text-2xl font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => navigate('/story')}
          >
            CONTINUE
          </button>
          <button 
            className="bg-yellow-100 hover:bg-yellow-200 text-gray-800 px-8 py-4 rounded-lg text-2xl font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => navigate('/story')}
          >
            NEW STORY
          </button>
          <button 
            className="bg-yellow-100 hover:bg-yellow-200 text-gray-800 px-8 py-4 rounded-lg text-2xl font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => setShowSettings(!showSettings)}
          >
            SETTINGS
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-900/90 p-8 rounded-2xl w-96">
            <h2 className="text-yellow-200 text-3xl mb-8">Settings</h2>
            
            {/* Volume Controls */}
            <div className="space-y-6">
              {Object.entries(audioSettings).map(([type, value]) => (
                <div key={type} className="flex items-center gap-4">
                  <span className="text-yellow-200 w-32 text-lg capitalize">
                    {type.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <div className="flex-1 flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={(e) => handleVolumeChange(type, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <Volume2 className="text-yellow-200" size={20} />
                  </div>
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button 
              className="mt-8 bg-yellow-100 hover:bg-yellow-200 text-gray-800 px-4 py-2 rounded-lg font-bold"
              onClick={() => setShowSettings(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoiceTales;