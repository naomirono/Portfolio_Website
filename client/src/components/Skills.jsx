import React, { useState } from 'react';
import { skillsData } from '../mock/skills';

function Skills() {
  const [openSkill, setOpenSkill] = useState(0);


  const handleSkillClick = (index) => {
    if (openSkill === index) {
      setOpenSkill(null); 
    } else {
      setOpenSkill(index); 
    }
  };

  const handleMouseLeave = () => {
    setOpenSkill(null); 
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
