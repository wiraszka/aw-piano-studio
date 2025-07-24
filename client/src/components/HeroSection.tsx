import React from 'react';
import logoPath from '@assets/aw-piano-studio-logo-NEW_1753224891226.png';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="mb-6">
          <img 
            src={logoPath} 
            alt="AW Piano Studios Logo" 
            className="h-24 md:h-32 mx-auto mb-4"
          />
        </div>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Discover the joy of piano through expert instruction and musical excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#about" 
            className="px-8 py-3 bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary font-medium rounded transition duration-300"
          >
            About the Studio
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-medium rounded transition duration-300"
          >
            Schedule a Lesson
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
