import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';

function Project() {
  return (
    <section className="project section">
      <div className="project_bg">
        <div className="project_container container grid">
          <div className="project_data">
            <h2 className="project_title">Embark on Your Next Project with Confidence</h2>
            <p className="project_description">
              Are you ready to turn your ideas into reality? With my expertise in web development, I'm equipped to
              bring your projects to life. From concept to execution, I'm dedicated to delivering high-quality,
              user-friendly solutions tailored to your unique needs.
            </p>
            <Link to="/contact" className="button button--flex button--white">
              Let's Get Started
              <FaComment className="project_icon button_icon" />
            </Link>
          </div>
          <img src="src/assets/IMG_5480.png" alt="" className="project_img" />
        </div>
      </div>
    </section>
  );
}

export default Project;
