import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';

const ContactSection = () => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  return (
    <section id='contact' className=" h-[90vh] pt-16">
      <div className='py-16 px-4 sm:px-8'>
      <div className="container max-w-[1200px] mx-auto rounded-[24px] p-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l contact_border">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-800 mb-6 pr-0 sm:pr-10">Have questions or want to get involved? We'd love to hear from you. Reach out to us using the contact details below or fill out the form and we'll get back to you as soon as possible.</p>
            <ul className="text-gray-800">
              <li className="mb-2"><FaEnvelope className="inline-block mr-2 text-custom-color cursor-pointer" /> Email: naomirono1454@gmail.com</li>
              <li className="mb-2"><FaPhoneAlt className="inline-block mr-2 text-custom-color cursor-pointer" /> Phone: +254706535423</li>
              <li className="mb-2"><FaLinkedin className="inline-block mr-2 text-blue-700 cursor-pointer" /> <a href="http://www.linkedin.com/in/naomi-rono/" target="_blank" rel="noopener noreferrer">LinkedIn: @Naomi Cherotich</a></li>
              <li className="mb-2"><FaGithub className="inline-block mr-2 text-black cursor-pointer" /> <a href="https://github.com/naomirono" target="_blank" rel="noopener noreferrer">Github: @naomirono</a></li>
              <li><FaTwitter className="inline-block mr-2 text-blue-500 cursor-pointer" /> Twitter: @naomirono</li>
            </ul>
          </div>
          <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-custom-color hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactSection;
