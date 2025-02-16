// src/data/scenes.js

export const scenes = {
  // Introduction & Attic Scene

  info: {
    id: 'info',
    text: `
    <p><strong>"Hey there, little adventurer!"</strong></p>  

    <p>Are you ready for an exciting journey where <strong>you</strong> make the choices and shape the story?</p>  

    <p><strong>ChoiceTails</strong> is a magical interactive world where you can explore fun stories, solve puzzles, and play exciting games. Every decision you make leads to a new adventure!</p>  

    <p><strong>Read, Play, and Explore!</strong></p>  
    <ul>
        <li>📖 Choose your own path in exciting <strong>interactive stories</strong></li>
        <li>🧩 Play <strong>fun learning games</strong> that help you grow smarter</li>
        <li>🦄 Discover <strong>cute characters and magical worlds</strong> waiting for you!</li>
    </ul>  

    <p>Your choices create your adventure—so let’s begin! 🎈🔮 Click, tap, and explore now!</p>  
    `,
    backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/frontbackground.jpg`,
    choices: [
        { 
            text: "Let's Begin!", 
            nextScene: 'intro' 
        }
    ]
},

  intro: {
      id: 'intro',
      text: "You and your brother Ben are cleaning the attic when you stumble upon an old, dusty map. The map has strange symbols, a big red 'X', and a mysterious note.",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/attic_background.jpg`,
      characters: ['protagonist', 'ben'],
      items: ['old_map'],
      soundEffect: 'paper_rustle',
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Show the map to Ben",
              nextScene: 'benDiscussion'
          }
      ]
  },

  benDiscussion: {
    id: 'benDiscussion',
    text: `
    <p><strong>Conversation between you and Ben.</strong></p>  

    <p>“I wonder where this leads,” you said, feeling curious. “I think it’s a <strong>secret treasure!</strong>” Ben shouted.</p>  

    <p>“Let’s find it!” you said, but Ben noticed something. "Look, there are some <strong>signs and symbols</strong> that we are not familiar with!".</p>  

    <p><strong>"We need help! " </strong> you suggested</p>  
    
    <p> " We should go to the <strong>Library</strong> and ask the Librarian about it!" You said. </p>

    <p">Let's hurry!" ben replied</p>  
    `,
    backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/dialogue.jpg`,
    choices: [
        { 
            text: "Go to Library With Ben!", 
            nextScene: 'library' 
        }
        ,
        { 
            text: "Go straight to the forest", 
            nextScene: 'intro' 
        }
    ]
},


  // Library Path
  library: {
      id: 'library',
      text: `
      <p> "Mr. Librarian! We found a <strong> map with unfamiliar signs and symbols!</strong> you said.<p>
      
      <p> "Can you help us Examine the map Mr. Libriarian ? " Ben asked </p>

      <p> "Let me take a look at it." the Librarian said </p>

      <p> "This is an ancient map, I can translate it to you but you will be needing a <strong> compass </strong> to navigate through it" the Librarian added. </p>
      
      <p> "Well then let's go pack our things Ben! We need a <strong>compass and some snacks</strong> for our adventure!" you said </p>

      <p> "You're right! Let's go!", Ben replied </p>

      <p> "Here, I already translated it for you, Goodluck on your journey and be careful!" The Librarian said. </p>

      <p> "Thank You Mr. Librarian!" You and Ben happily replied. </p>
      `,      
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/library_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      soundEffect: 'library_ambience',
      choices: [
          {
              text: "Pack supplies first",
              nextScene: 'packingSupplies',
              gameStateUpdate: { hasAdvice: true }
          },
          {
              text: "Rush to forest anyway",
              nextScene: 'forestUnprepared'
          }
      ]
  },

  packingSupplies: {
    id: 'packingSupplies',
    text: `
      <p> You and Ben proceed in packing the things that you need in your adventure. </p>

      <p> After a few hours of packing, you and Ben are Ready to go. </p>

      <p> "Shall we <strong>pray</strong> first ? Ben asked. </p>
      
      <p> "Of Course we will!" you replied. </p>

      <p> After the two of you have prayed, you proceed on starting your <strong>adventure</strong> </p>
    `,
    backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/attic_background.jpg`,
    characterImages: {
        protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
        ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
    },
    items: ['compass','sandwich'],
    collectibles: ['sandwich'],
    soundEffect: 'magical_glow',
    choices: [
        {
            text: "Head to forest",
            nextScene: 'forestEntrance',
            requirement: {
                items: ['compass']
            }
        }
    ]
},

  forestEntrance: {
      id: 'forestEntrance',
      text: `
      <p> As you and Ben explore the forest, Ben noticed something funny. </p>

      <p> "Look at that <Strong>funny-shaped tree!</strong>" Ben points to one with branches that curl like swirls of ice cream. You both giggle and keep walking. </p>

      <p> You suddenly saw a <strong>stream</strong>, "Hey Ben! look at that Stream! <strong>Should we follow it ?</strong>, you asked " </p>

      <p> "Wow it is so beautiful, and look there is <strong>a hill with a big tree on top of it! Should we climb it and get a better view?</strong>" Ben replied. </p>
      `,
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/forest_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Follow The Stream",
              nextScene: 'forestExploration',
              requirement: {
                  items: ['compass']
              }
          },
          {
              text: "Climb the hill",
              nextScene: 'packingSupplies'
          }
      ]
  },

  
  forestExploration: {
      id: 'forestExploration',
      text:`
      <p> As the two of you followed the stream, Ben suddenly saw something shiny . </p>

      <p> "Hey! Look at that <strong> shiny thing </strong> !" Ben points to a small, glinting object half-burried on the ground. </p>

      <p> The two of you approaches it with care </p>

      <p> "Ben, I think this is it! We Found the <strong>Treasure</strong>! " you exclaimed. </p>

      <p> "You're right! We did it! We found the treasure!" Ben replied. </p>

      <p> The both of you hugged each other in excitement. Then you noticed something. </p>

      <p> "Look there is a <strong> path with a bright lights and a music that's like it is calling us!</strong>" you said to Ben. </p>

      <p> "You're right, what should we do ? <strong>Shall we take this treasure and go home, or shall we follow that path ?</strong>" Ben asked. </p>
      `,
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/forest_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Follow the path",
              nextScene: 'endingMagic'
          },
          {
              text: "Take the chest and return home",
              nextScene: 'endingTreasure'
          }
      ]
  },

  endingTreasure: {
      id: 'endingTreasure',
      text: `
      <p> You and Ben return home and everyone is amazed by the treasure you found, including the Librarian. </p>

      <p> After what happened, you and Ben became close friends and decided to go to more treasure hunting adventures! </p>

      <p> Since that day, the two of you are called <strong> "The Youngest Tresure Hunters!" </strong> </p>

      <p> <strong> Good job on finding the treasure! </strong> </p>

      <p> Your choices have led you to this successful ending! </p>

      `,
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/treasure_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Play Again",
              nextScene: 'intro'
          }
      ]
  },

  endingMagic: {
      id: 'endingMagic',
      text: "You discover the true magic of the forest and decide to keep exploring its mysteries!",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/forest_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Play Again",
              nextScene: 'story'
          }
      ]
  }
};

// Collectible items configuration
export const items = {
  old_map: {
      id: 'old_map',
      name: "Mysterious Map",
      image: `${process.env.PUBLIC_URL}/images/items/old_map.png`,
      description: "An ancient map with mysterious symbols"
  },
  compass: {
      id: 'compass',
      name: "Navigation Compass",
      image: `${process.env.PUBLIC_URL}/images/items/compass.png`,
      description: "A reliable compass for forest navigation"
  }
};

// Scene requirements
export const sceneRequirements = {
  forestPrepared: ['compass'],
  treasureLocation: ['old_map', 'compass'],
  endingTreasure: ['old_map', 'compass']
};