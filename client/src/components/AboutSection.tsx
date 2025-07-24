import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-primary">AW Piano Studio</span>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Piano instructor at AW Music Studios" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">Meet Your Instructor</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to AW Piano Studio. I'm a classically trained pianist with over 20 years of experience performing and creating music. My background includes formal training through the Royal Conservatory of Music, and for the past decade, I've balanced teaching with active performance—playing in rock bands, DJing, and performing solo acoustic sets.
              </p>
              <p>
                As a teacher, I offer a flexible, student-focused approach tailored to your goals. Whether you're aiming to progress through RCM levels, deepen your understanding of music theory, or simply learn to play your favourite songs, I'll help you build the skills and confidence to get there.
              </p>
              <p>
                Lessons emphasize proper technique, posture, and control, while also cultivating musicality, rhythm, and personal expression. I welcome students of all ages (4 and up) and all skill levels—from absolute beginners to experienced players.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#music" 
                className="px-6 py-3 bg-primary hover:bg-opacity-90 text-white text-center font-medium rounded transition duration-300"
              >
                Listen to My Music
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:bg-opacity-10 text-center font-medium rounded transition duration-300"
              >
                Connect with Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
