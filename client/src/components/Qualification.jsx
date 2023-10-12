import React, { useEffect } from 'react';
import { FiCode, FiServer } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi'; // Added this line

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
  }, []); // Run this effect only once when component mounts

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button--flex qualification_active" data-target="#education">
            <FiCode className="qualification_icon" />
            Education
          </div>
          <div className="qualification_button button--flex" data-target="#work">
            <FiServer className="qualification_icon" />
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
                  <FiCalendar /> {/* Replaced <i> tag with React icon */}
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
                  <FiCalendar /> {/* Replaced <i> tag with React icon */}
                  2016 - 2021
                </div>
              </div>
            </div>
          </div>

          <div className="qualification_content" data-content id="work">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Intern</h3>
                <span className="qualification_subtitle">Unilever Tea Limited</span>
                <div className="qualification_calendar">
                  <FiCalendar /> {/* Replaced <i> tag with React icon */}
                  2020 - 2020
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
                  <FiCalendar /> {/* Replaced <i> tag with React icon */}
                  2019 - 2020
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
