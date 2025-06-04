import React from 'react';
import { ChevronDown } from 'lucide-react';
import Astronaut from '../../assets/images/Astronaut.svg'; 
import Galaxy from '../../assets/images/GalaxyBackground.svg';
import { Typewriter } from 'react-simple-typewriter';
const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center via-white to-purple-50">
      <img
        src={Galaxy}
        alt="Galaxy background"
        className="absolute transform translate-y-20 w-screen h-screen object-cover z-0"
      />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="animate-fade-in text-left">
              <h2 className="text-4xl md:text-4xl font-bold text-white mb-2">Welcome to my Portfolio</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  <Typewriter
                    words={['Mars Benitez']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
                Full-Stack Developer passionate about creating beautiful, functional web applications 
                that solve real-world problems and deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  View My Work
                </button>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            <div className="max-w-sm z-1">
              <img
                src={Astronaut}
                alt="Astronaut"
                className="w-full h-auto transform transition-transform duration-500 animate-gentleBounce"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
      
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};
export default Hero;