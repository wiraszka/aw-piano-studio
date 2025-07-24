import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-piano-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} AW Music Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
