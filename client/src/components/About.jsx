import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import Image from '../assets/IMG_7072.png';

const About = () => {
  return (
    <section id="about" className="py-14 md:py-20 max-w-[1100px] mx-auto">
      <div className="container mx-auto md:my-8 md:px-4 lg:px-0 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
            <span className="section_subtitle block mb-6 text-center">My Introduction</span>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 pb-36">
            <div className="relative">
            <div
                className="w-full h-[250px] md:max-w-md about_div"
              />
              
              <img
                src={Image}
                alt="Image"
                className="w-full md:w-5/6 absolute bottom-0 right-0 md:mr-[-10%] md:mb-[-17%] border border-2 bg-white"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-20">

            <p className="text-lg">
              A highly motivated and dedicated entry-level frontend developer with a passion for creating immersive web experiences. I specialise in transforming design concepts into responsive and user-friendly websites.My journey in the world of web development began when I discovered my love for crafting elegant and functional interfaces. With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills through various personal projects that I have proudly showcased on my LinkedIn profile.
            </p>

            <div className="about_info flex justify-center mb-6">
              <div className="text-center mx-4">
                <span className="about_info-title">01+</span>
                <span className="about_info-name block">Years experience</span>
              </div>

              <div className="text-center mx-4">
                <span className="about_info-title">3+</span>
                <span className="about_info-name block">Completed projects</span>
              </div>

              <div className="text-center mx-4">
                <span className="about_info-title">01</span>
                <span className="about_info-name block">Companies worked</span>
              </div>
            </div>

            <div className="about_buttons text-center">
              <a
                href="https://neyoportfolio.s3.eu-north-1.amazonaws.com/Naomi+Cherotich+.pdf"
                download=""
                className="button button--flex"
              >
                Download Resume
                <FaFileDownload className="button_icon ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
