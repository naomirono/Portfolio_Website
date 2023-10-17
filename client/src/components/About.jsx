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
          <p className="about_description">A highly motivated and dedicated entry-level frontend developer with a passion for creating immersive web experiences. I specialise in transforming design concepts into responsive and user-friendly websites.My journey in the world of web development began when I discovered my love for crafting elegant and functional interfaces. With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills through various personal projects that I have proudly showcased on my LinkedIn profile.</p>

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
            <a href="https://neyoportfolio.s3.eu-north-1.amazonaws.com/Naomi+Cherotich+.pdf" download="" className="button button--flex">
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
