import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMousePointer, FiArrowDown } from 'react-icons/fi';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_social">
            <a href="www.linkedin.com/in/naomi-rono/" className="home_social-icon">
              <FaLinkedin />
            </a>

            <a href="https://github.com/naomirono" className="home_social-icon">
              <FaGithub />
            </a>

            <a href="https://twitter.com/NeyoRono" className="home_social-icon">
              <FaTwitter />
            </a>
          </div>

          <div className="home_img">
            <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image className="home_blob-img" x='35' y='11' href="src/assets/neyo.png" />
              </g>
            </svg>
          </div>

          <div className="home_data">
            <h1 className="home_title">Hi, I'am <span className="home_name">Naomi</span></h1>
            <h3 className="home_subtitle">Full Stack Web Developer</h3>
            <p className="home_description">Javascript developer building highly-accessible web applications.</p>
            <a href="#contact" className="button button--flex">Contact Me<i className="uil uil-message button_icon"></i></a>
          </div>
        </div>

        <div className="home_scroll">
          <a href="#about" className="home_scroll-button button--flex"><FiMousePointer className="home_scroll-mouse" />
            <span className="home_scroll-name">Scroll down</span>
            <FiArrowDown className="home_scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
