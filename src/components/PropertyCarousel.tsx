import { useState, useRef } from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import PropertyCard from './PropertyCard';

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: string;
}

interface PropertySectionProps {
  desktopCards: number;
  mobileCards: number;
  properties: Property[];
}

const PropertySection = ({ desktopCards = 4, mobileCards = 1, properties }: PropertySectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const isMobile = window.innerWidth < 1024;
      const visibleCards = isMobile ? mobileCards : desktopCards;
      const cardWidth = container.offsetWidth / visibleCards;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      if (direction === 'left') {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, properties.length - visibleCards));
      }
    }
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Explore Our Properties</h2>
          <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
            View all categories
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
              aria-label="Previous"
            >
              <IoChevronBackOutline className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {currentIndex < properties.length - (window.innerWidth >= 1024 ? desktopCards : mobileCards) && (
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
              aria-label="Next"
            >
              <IoChevronForwardOutline className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {/* Cards Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-hidden gap-6 scroll-smooth -mx-2 px-2"
          >
            {properties.map((property) => (
              <div 
                key={property.id}
                className="flex-none w-full lg:w-[calc(25%-18px)] rounded-xl overflow-hidden"
              >
                <PropertyCard 
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  beds={property.beds}
                  baths={property.baths}
                  price={property.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;