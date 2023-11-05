import React, { useEffect } from 'react';
import { FiCalendar } from 'react-icons/fi'; 

function Qualification() {
  useEffect(() => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
          tabContent.classList.remove('qualification_active');
        });

        target.classList.add('qualification_active');

        tabs.forEach(tab => {
          tab.classList.remove('qualification_active');
        });

        tab.classList.add('qualification_active');
      });
    });
  }, []); 

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button--flex qualification_active" data-target="#education">
          <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div className="qualification_button button--flex" data-target="#work">
          <i className="uil uil-briefcase-alt qualification_icon"></i>
            Work
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content qualification_active" data-content id="education">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Full Stack Web Development</h3>
                <span className="qualification_subtitle">Udemy</span>
                <div className="qualification_calendar">
                  <FiCalendar /> 
                  2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Applied Statistics With Computing</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <FiCalendar /> 
                  2016 - 2021
                </div>
              </div>
            </div>
          </div>

          <div className="qualification_content" data-content id="work">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineer Intern</h3>
                <span className="qualification_subtitle">Amaris Solution Group</span>
                <div className="qualification_calendar">
                  <FiCalendar /> 
                  April 2023 - July 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Intern</h3>
                <span className="qualification_subtitle">Unilever Tea Limited</span>
                <div className="qualification_calendar">
                  <FiCalendar /> 
                  2020 - 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
