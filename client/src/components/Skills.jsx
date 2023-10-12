import React, { useState } from 'react';
import { FiCode, FiServer } from 'react-icons/fi';

function Skills() {
  const [openSkill, setOpenSkill] = useState(0);

  const skillsData = [
    {
      icon: <FiCode className="skills_icon" />,
      title: 'Frontend Developer',
      subtitle: 'More than 1 year',
      items: ['HTML5', 'CSS3', 'Bootstrap', 'Javascript', 'React']
    },
    {
      icon: <FiServer className="skills_icon" />,
      title: 'Backend Developer',
      subtitle: 'More than 1 year',
      items: ['Node Js', 'MongoDB', 'Firebase', 'Express']
    },
    {
      icon: <FiServer className="skills_icon" />,
      title: 'Tech Stack',
      subtitle: 'More than 1 year',
      items: ['Visual Studio Code', 'Git']
    }
  ];

  const handleSkillClick = (index) => {
    if (openSkill === index) {
      setOpenSkill(null); // Close if already open
    } else {
      setOpenSkill(index); // Open the clicked skill
    }
  };

  const handleMouseLeave = () => {
    setOpenSkill(null); // Close on mouse leave
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <div>
          {skillsData.map((skill, index) => (
            <div key={index} className={`skills_content ${openSkill === index ? 'skills_open' : 'skills_close'}`}
            onClick={() => handleSkillClick(index)}
            onMouseLeave={handleMouseLeave}
            >
              <div className="skills_header" onClick={() => setOpenSkill(index)}>
                {skill.icon}
                <div>
                  <h1 className="skills_title">{skill.title}</h1>
                  <span className="skills_subtitle">{skill.subtitle}</span>
                </div>
                <i className="uil uil-angle-down skills_arrow"></i>
              </div>

              <div className="skills_list grid">
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">{item}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
