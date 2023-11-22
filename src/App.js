//   src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
);
