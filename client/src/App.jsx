import React from 'react';
import Header from './components/Header';
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
