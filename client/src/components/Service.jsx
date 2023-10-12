import React, { useEffect } from 'react';
import { FiCode } from 'react-icons/fi';

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
            <FiCode className="services_icon" />
            <h3 className="services_title">Frontend <br /> Developer</h3>
          </div>

          <span className="button button--flex button--small button--link services_button">
            View More
            <FiCode className="button_icon" />
          </span>

          <div className="services_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">Frontend <br /> Developer</h4>
              <FiCode className="services_modal-close" />

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I develop the user interface.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I create UX element interactions.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <FiCode className="services_icon" />
            <h3 className="services_title">Backend <br /> Developer</h3>
          </div>

          <span className="button button--flex button--small button--link services_button">
            View More
            <FiCode className="button_icon" />
          </span>

          <div className="services_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">Backend <br /> Developer</h4>
              <FiCode className="services_modal-close" />

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I develop the user interface.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I create UX element interactions.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <FiCode className="services_icon" />
            <h3 className="services_title">Frontend <br /> Developer</h3>
          </div>

          <span className="button button--flex button--small button--link services_button">
            View More
            <FiCode className="button_icon" />
          </span>

          <div className="services_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">Frontend <br /> Developer</h4>
              <FiCode className="services_modal-close" />

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I develop the user interface.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I create UX element interactions.</p>
                </li>
                <li className="services_modal-service">
                  <FiCode className="services_modal-icon" />
                  <p>I position your company brand.</p>
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
