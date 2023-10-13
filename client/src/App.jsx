import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Service';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import ContactSection from './components/Contact';

function App() {

  // useEffect replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // MENU SHOW
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    // MENU HIDDEN
    const navClose = document.getElementById('nav-close');
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (navToggle) navToggle.removeEventListener('click', () => {});
      if (navClose) navClose.removeEventListener('click', () => {});
      // ... Remove other event listeners here
    };
  }, []);

  return (
    <div className="App main">
      <Header />
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Services/>
      <Portfolio/>
      <Project/>
      <ContactSection/>
    </div>
  );
}

export default App;
