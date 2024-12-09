import { useState, useRef } from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import PropertyCard from './PropertyCard';
import prop1 from '../assets/properties/prop1.svg'
import prop2 from '../assets/properties/prop2.svg'
import prop3 from '../assets/properties/prop3.svg'


interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: string;
}

const DiscoverSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const properties: Property[] = [
    {
      id: 1,
      image: prop1,
      title: "Vista Heights",
      location: "UNI ENUGU",
      beds: 1,
      baths: 1,
      price: "N200,000"
    },
    {
      id: 2,
      image: prop2,
      title: "Parkside Whispering Oaks",
      location: "UNIZIK",
      beds: 1,
      baths: 1,
      price: "N300,000"
    },
    {
      id: 3,
      image: prop3,
      title: "Summit View Cityscape",
      location: "Salt Lake City, UGH",
      beds: 1,
      baths: 1,
      price: "N150,000"
    },
    {
      id: 4,
      image: "https://placehold.co/600x400",
      title: "Summit View Cityscape",
      location: "Salt Lake City, UGH",
      beds: 1,
      baths: 1,
      price: "N150,000"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      // Card width (316px) + gap (24px)
      const scrollAmount = direction === 'left' ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      if (direction === 'left') {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, properties.length - 3));
      }
    }
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Discover your ideal Apartment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            get not just a Apartment, but a dream meticulously crafted for your aspirations.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Previous Button */}
          {currentIndex > 0 && (
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
              aria-label="Previous"
            >
              <IoChevronBackOutline className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {/* Next Button */}
          {currentIndex < properties.length - 3 && (
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
              aria-label="Next"
            >
              <IoChevronForwardOutline className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {/* Cards Container */}
          <div className="flex justify-center">
            <div 
              ref={carouselRef}
              className="flex overflow-hidden min-h-[400px] gap-6 scroll-smooth w-[1020px]"
            >
              {properties.map((property) => (
                <div 
                  key={property.id}
                  className="flex-none w-[316px]"
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
      </div>
    </section>
  );
};

export default DiscoverSection;