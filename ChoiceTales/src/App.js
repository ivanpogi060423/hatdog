import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoiceTales from './components/ChoiceTales';
import StoryGame from './components/StoryGame';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoiceTales />} />
        <Route path="/story" element={<StoryGame />} />
        <Route path="/info" element={<swadwd />}/>
      </Routes>
    </Router>
  );
};

export default App;