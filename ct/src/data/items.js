export const itemDetails = {
    oldMap: {
      id: 'oldMap',
      name: 'Mysterious Map',
      description: 'An ancient map with cryptic symbols and a glowing red "X"',
      image: '/images/items/old_map.png',
      actions: [
        { 
          name: 'Decode Symbols', 
          effect: () => alert('Mysterious runes begin to shimmer and reveal hidden paths!')
        }
      ]
    },
    compass: {
      id: 'compass',
      name: 'Enchanted Compass',
      description: 'A golden compass that pulses with magical energy',
      image: '/images/items/compass.png',
      actions: [
        { 
          name: 'Activate Compass', 
          effect: () => alert('The compass needle spins, revealing secret directions!')
        }
      ]
    },    
    sandwich: {
      id: 'sandwich',
      name: 'A delicious snack',
      description: 'A delicious sandwich that will restore your energy',
      image: '/images/items/sandwich.png',
      actions: [
        { 
          name: 'Delicious Snack!', 
          effect: () => alert('A Delicious Sandwich!')
        }
      ]
    }
    // More items...
  };