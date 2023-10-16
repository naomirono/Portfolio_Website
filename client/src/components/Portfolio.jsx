import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
    const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const portfolioItems = [
    {
      imgSrc: '[https://neyoportfolio.s3.eu-north-1.amazonaws.com/TreeHaven.png]',
      title: 'Tree Planting Website with Stripe and M-Pesa Integration',
      description: 'Built a dynamic tree planting website utilizing React and Tailwind Css for the frontend, Node.js for the backend, and MongoDB for the database. Skillfully integrated both Stripe and M-Pesa payment gateways to streamline donation processing, showcasing expertise in front-end development, payment integration, and API utilization.',
      demoLink: 'https://shoe-website-neyo.web.app',
    },
    {
      imgSrc: 'src/assets/Untitled design (6).png',
      title: 'Construction Company Website',
      description: 'Developed and designed a static website for a construction company as a personal project, using HTML, CSS, and JavaScript. Designed a visually appealing and a user-friendly website that showcases the companys services and projects. Implemented responsive design techniques to ensure the website looked great on desktop and mobile devices.',
      demoLink: 'https://atesta-solutions.web.app/',
    },
    {
      imgSrc: 'src/assets/Untitled design (6).png',
      title: 'Travel Agency Landing page',
      description: 'a stunning landing page for a travel agency crafted using React and Slick Carousel. Built with React for seamless UI, Slick Carousel for smooth image sliders,Tailwind CSS for sleek styling.',
      demoLink: '#',
    },
    {
      imgSrc: 'src/assets/Untitled design (6).png',
      title: 'BMI Calculator',
      description: 'Website adaptable to all devices, with ui components and animated interactions.',
      demoLink: '#', 
      },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most recent work</span>

      <div className="portfolio_container container">
        <Slider ref={sliderRef} {...sliderSettings}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio_content grid">
              <img src={item.imgSrc} alt={item.title} className="portfolio_img" />
              <div className="portfolio_data">
                <h3 className="portfolio_title">{item.title}</h3>
                <p className="portfolio_description">{item.description}<br/><a href={item.demoLink}>{item.demoLink}</a></p>
                <a href={item.demoLink} className="button button--flex button--small button--link portfolio_button">
                  Demo
                  <i className="uil uil-arrow-right button_icon"></i>
                </a>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex absolute w-full pt-8">
          <button
            className="border border-custom-color text-custom-color rounded-full py-2 px-4"
            style={{ marginRight: '20px' }}
            onClick={handlePrevClick}
          >
            {'<'}
          </button>
          <button 
          className="border border-custom-color text-custom-color rounded-full py-2 px-4"
          onClick={handleNextClick}
          >
            {'>'}
          </button>
          <div className="border-b-2 border-custom-color w-[750px] absolute bottom-4 ml-32 "></div> {/* Added border */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
