import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mars Benitez
          </div>
          <p className="text-gray-400 mb-6">
            Building the future, one line of code at a time.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Mars0827" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mars-benitez-28781a2b9/" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:marsbenitez@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Mars Benitez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;