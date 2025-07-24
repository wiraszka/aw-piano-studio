import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/lib/constants';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Update slider transform when index changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (diff > threshold) {
      // Swiped left, go to next slide
      handleNext();
    } else if (diff < -threshold) {
      // Swiped right, go to previous slide
      handlePrevious();
    }
    
    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="testimonials" className="section-padding bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Student <span className="text-primary">Testimonials</span>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="testimonial-carousel relative">
          {/* Testimonial Slider */}
          <div 
            className="overflow-hidden" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={sliderRef}
              className="testimonial-slider flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-secondary opacity-30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg italic mb-6">
                      {testimonial.content}
                    </p>
                    <div className="flex justify-center mb-3">
                      <div className="flex text-secondary">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"} 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={i < testimonial.rating && testimonial.rating % 1 > 0 && i === Math.floor(testimonial.rating) ? 0 : 2} 
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full bg-primary focus:outline-none transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Arrow Controls */}
          <button 
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md focus:outline-none hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md focus:outline-none hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
