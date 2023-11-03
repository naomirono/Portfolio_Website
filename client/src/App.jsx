import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Service';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import ContactPage from './components/ContactPage';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App main">
        <Header/>
        
        <Routes>
          <Route path="/"  element={<LandingPage/>} />
          <Route path="/contact"  element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
