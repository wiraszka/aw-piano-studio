import React, { useEffect, useRef } from 'react';

// Extend the Window interface to include google maps
declare global {
  interface Window {
    google: any;
  }
}

const LocationSection: React.FC = () => {
  const address = "6440 Douglas St, West Vancouver, BC";
  const encodedAddress = encodeURIComponent(address);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      try {
        // Fetch API key from server
        const response = await fetch('/api/maps-key');
        const { apiKey } = await response.json();

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } catch (error) {
        console.error('Failed to load Google Maps API key:', error);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      // Exact GPS coordinates for 6440 Douglas St, West Vancouver, BC
      const studioLocation = { lat: 49.37333183084325, lng: -123.27676694510352 };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        zoom: 16,
        center: studioLocation,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Create custom marker with modern design
      const marker = new window.google.maps.Marker({
        position: studioLocation,
        map: mapInstanceRef.current,
        title: "AW Piano Studios - 6440 Douglas St, West Vancouver, BC",
        icon: {
          path: "M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13C19,5.13 15.87,2 12,2z",
          fillColor: '#4F46E5',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
          scale: 1.5,
          anchor: { x: 12, y: 24 }
        }
      });

      // Create a custom overlay for the text bubble
      const textBubble = new window.google.maps.OverlayView();
      textBubble.onAdd = function() {
        const div = document.createElement('div');
        div.style.cssText = `
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #4F46E5;
          border-radius: 8px;
          padding: 4px 8px;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: bold;
          color: #4F46E5;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          white-space: nowrap;
          transform: translate(-50%, -100%);
          margin-top: -35px;
        `;
        div.innerHTML = 'AW Piano Studio';
        this.div = div;
        
        const panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
      };

      textBubble.draw = function() {
        const projection = this.getProjection();
        const position = projection.fromLatLngToDivPixel(new window.google.maps.LatLng(studioLocation.lat, studioLocation.lng));
        
        if (position) {
          this.div.style.left = position.x + 'px';
          this.div.style.top = position.y + 'px';
        }
      };

      textBubble.onRemove = function() {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
        }
      };

      textBubble.setMap(mapInstanceRef.current);

      // Create custom info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #8B4513; font-size: 16px;">🎹 AW Piano Studios</h3>
            <p style="margin: 0 0 5px 0; font-size: 14px; color: #333;">6440 Douglas St</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #333;">West Vancouver, BC</p>
            <p style="margin: 0; font-size: 12px; color: #666; font-style: italic;">Professional Piano Instruction</p>
          </div>
        `
      });

      // Show info window when marker is clicked
      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker);
      });
    };

    loadGoogleMaps();
  }, [address]);

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Studio <span className="text-primary">Location</span>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-[#F5F5F5] rounded-lg shadow-lg overflow-hidden" style={{ height: '422px' }}>
              <div className="w-full h-full flex flex-row overflow-hidden rounded-lg">
                <div className="flex-grow h-full relative">
                  <div 
                    ref={mapRef}
                    className="w-full h-full"
                    style={{ minHeight: '422px' }}
                  />
                </div>
                <div className="w-1/4 bg-primary flex items-center justify-center">
                  <a 
                    href={`https://maps.google.com/?q=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white p-4 hover:bg-opacity-90 transition duration-300 text-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get<br/>Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">Find Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>6440 Douglas St<br/>West Vancouver, BC</p>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>226-456-0457</p>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>adam.wirasz@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Parking Information</h3>
              <p>
                Students can park in the driveway or use the free street parking available in front of the home.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Public Transportation</h3>
              <p>
                We're located 5 minutes walking distance from Horseshoe Bay Ferry terminal and are served by bus routes 257 and 250.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
