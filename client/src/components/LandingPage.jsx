import Home from "./Home";
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Services from './Service';
import Portfolio from './Portfolio';
import Project from './Project';

function LandingPage() {
    return (
      <div className="Landing-page">
        <Home/>
        <About />
        <Skills/>
        <Qualification/>
        <Services/>
        <Portfolio/>
        <Project/>
      </div>
    );
  }
  
  export default LandingPage;