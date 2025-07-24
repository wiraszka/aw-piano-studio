import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MusicSection from '@/components/MusicSection';
import LocationSection from '@/components/LocationSection';
import ResourcesSection from '@/components/ResourcesSection';
import ContactSection from '@/components/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <LocationSection />
      <ResourcesSection />
      <ContactSection />
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
};

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 invisible'
      }`}
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default Home;
