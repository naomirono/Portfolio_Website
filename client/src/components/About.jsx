import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>
      <div className="about_container container grid">
        <img src="src/assets/IMG_7072.png" alt="" className="about_img" />
        <div className="about_data">
          <p className="about_description">Enthusiastic Applied Statistics with Computing graduate from Moi University. A Full-Stack Web Developer with experience in Javascript, MERN Stack.</p>

          <div className="about_info">
            <div>
              <span className="about_info-title">01+</span>
              <span className="about_info-name">Years <br /> experience</span>
            </div>

            <div>
              <span className="about_info-title">3+</span>
              <span className="about_info-name">Completed <br /> projects</span>
            </div>

            <div>
              <span className="about_info-title">01</span>
              <span className="about_info-name">Companies <br /> worked</span>
            </div>
          </div>

          <div className="about_buttons">
            <a href="src/assets/pdf/Naomi Cherotich.pdf" download="" className="button button--flex">
              Download Resume
              <FaFileDownload className="button_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
