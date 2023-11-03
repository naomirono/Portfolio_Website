import React, { useEffect } from 'react';
import { FiCode, FiServer } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Services() {
  useEffect(() => {
    const modalViews = document.querySelectorAll('.services_modal');
    const modalBtns = document.querySelectorAll('.services_button');
    const modalCloses = document.querySelectorAll('.services_modal-close');

    let modal = function(modalClick) {
      modalViews[modalClick].classList.add('active-modal');
    }

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener('click', () => {
        modal(i);
      })
    })

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove('active-modal');
        })
      })
    })
  }, []);
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I Offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
          <i class="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Frontend <br /> Developer</h3>
          </div>

          <span className="button button--flex button--small button--link services_button">
            View More
            <FiCode className="button_icon" />
          </span>

          <div className="services_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">Frontend <br /> Developer</h4>
              <AiOutlineCloseCircle  className="services_modal-close" />

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I create interactive user interfaces.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Implement responsive web design.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Utilize modern JavaScript frameworks like React.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Optimize website performance for fast loading times.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i class="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Backend <br /> Developer</h3>
          </div>

          <span className="button button--flex button--small button--link services_button">
            View More
            <FiCode className="button_icon" />
          </span>

          <div className="services_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">Backend <br /> Developer</h4>
              <AiOutlineCloseCircle  className="services_modal-close" />

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Design and implement server-side logic and APIs.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Develop database architecture and management.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Ensure system scalability and performance.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Implement security measures to protect data and user information.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
