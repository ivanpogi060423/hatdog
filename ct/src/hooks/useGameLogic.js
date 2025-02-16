import { useState, useReducer } from 'react';
import { scenes } from '../data/scenes';

const initialGameState = {
  currentScene: 'info',
  inventory: [],
  gameProgress: {
    mapDecoded: false,
    suppliesPacked: false,
    riddleSolved: false
  },
  achievements: [],
  health: 100,
  score: 0
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SCENE':
      return {
        ...state,
        currentScene: action.payload.sceneId,
        gameProgress: {
          ...state.gameProgress,
          ...action.payload.progressUpdates
        }
      };
    
    case 'COLLECT_ITEM':
      return {
        ...state,
        inventory: state.inventory.includes(action.payload.itemId)
          ? state.inventory
          : [...state.inventory, action.payload.itemId],
        score: state.score + 10
      };
    
    // More complex game state management
    default:
      return state;
  }
}

export function useGameLogic() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const [claimedItem, setClaimedItem] = useState(null);

  const transitionToScene = (sceneId, progressUpdates = {}) => {
    dispatch({
      type: 'CHANGE_SCENE', 
      payload: { sceneId, progressUpdates }
    });
  };

  const collectItem = (itemId) => {
    dispatch({ 
      type: 'COLLECT_ITEM', 
      payload: { itemId } 
    });
    setClaimedItem(itemId);
    
    // Auto-clear claimed item status
    setTimeout(() => setClaimedItem(null), 2000);
  };

  return {
    currentScene: scenes[state.currentScene],
    inventory: state.inventory,
    gameProgress: state.gameProgress,
    claimedItem,
    transitionToScene,
    collectItem
  };
}
