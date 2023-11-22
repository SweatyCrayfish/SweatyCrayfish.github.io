// src/App.js

import React from 'react';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Research from './components/Research';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <About />
      <Hobbies />
      <Research />
      <Projects />
    </div>
  );
}

export default App;
