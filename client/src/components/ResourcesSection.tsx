import React from 'react';
import { resourceCategories } from '@/lib/constants';

interface ResourceLink {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface ResourceCategory {
  id: number;
  title: string;
  color: string;
  icon: string;
  links: ResourceLink[];
}

const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="section-padding bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Student <span className="text-primary">Resources</span>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category) => (
            <ResourceCard key={category.id} category={category} />
          ))}
        </div>
        
        {/* Studio Resources Download */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform -skew-y-2"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-playfair font-semibold mb-4">Student Materials</h3>
                <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                <p className="text-gray-700">
                  Current students can access practice schedules, studio policies, and supplementary materials below.
                  These resources are designed to support your musical journey between lessons.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-lg">
                  <div className="h-2 bg-primary"></div>
                  <div className="p-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h4 className="font-semibold mb-2">Practice Journal</h4>
                    <p className="text-sm text-gray-600 mb-4">Track your daily practice and set goals</p>
                    <a 
                      href="/resources/practice-journal.html" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary hover:bg-opacity-90 text-white text-sm font-medium rounded-full flex items-center justify-center transition duration-300 mx-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-lg">
                  <div className="h-2 bg-secondary"></div>
                  <div className="p-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h4 className="font-semibold mb-2">Studio Handbook</h4>
                    <p className="text-sm text-gray-600 mb-4">Policies, procedures and expectations</p>
                    <a 
                      href="/resources/studio-handbook.html" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-secondary hover:bg-opacity-90 text-white text-sm font-medium rounded-full flex items-center justify-center transition duration-300 mx-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-lg">
                  <div className="h-2 bg-gray-400"></div>
                  <div className="p-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h4 className="font-semibold mb-2">Theory Worksheets</h4>
                    <p className="text-sm text-gray-600 mb-4">Exercises to develop music theory skills</p>
                    <a 
                      href="/resources/theory-worksheets.html" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-gray-400 text-gray-700 hover:bg-gray-100 text-sm font-medium rounded-full flex items-center justify-center transition duration-300 mx-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResourceCard: React.FC<{ category: ResourceCategory }> = ({ category }) => {
  // Safely determine the background color for the card header
  const headerColor = category.color === 'primary' ? 'bg-primary' : 'bg-secondary';
  // Safely determine the icon color
  const iconColor = category.color === 'primary' ? 'text-secondary' : 'text-primary';
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`h-2 ${headerColor}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-4 flex items-center">
          <span className={`inline-block w-8 h-8 ${headerColor} rounded-full flex items-center justify-center mr-3`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          {category.title}
        </h3>
        <ul className="space-y-4">
          {category.links.map((link) => (
            <li key={link.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${iconColor} mt-1 mr-3 group-hover:text-primary transition-colors`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourcesSection;
