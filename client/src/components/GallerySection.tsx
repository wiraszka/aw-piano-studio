import React from 'react';
import { galleryItems } from '@/lib/constants';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GallerySection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Studio <span className="text-primary">Gallery</span>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
  return (
    <div className="gallery-item overflow-hidden rounded-lg shadow-lg group">
      <div className="h-64 overflow-hidden">
        <img 
          src={item.src} 
          alt={item.alt} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4 bg-white">
        <h4 className="font-playfair text-lg font-medium">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default GallerySection;
