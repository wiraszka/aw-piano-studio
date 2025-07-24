import React, { useState } from 'react';
import { Link } from 'wouter';
import logoPath from '@assets/aw-piano-studio-logo-NEW_1753224891226.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#music", label: "Music" },
    { href: "#location", label: "Location" },
    { href: "#resources", label: "Resources" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src={logoPath} 
              alt="AW Piano Studios Logo" 
              className="h-10 md:h-12"
            />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-piano-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-piano-black hover:text-primary transition duration-300 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <li key={link.href} className="py-2">
              <a 
                href={link.href} 
                className="text-piano-black hover:text-primary"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
