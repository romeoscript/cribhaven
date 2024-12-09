import { useState, useEffect } from 'react';
import herosvg from '../assets/home/hero.svg';
import { FindLodgeForm } from './Forms/FindLodgeForm';
import Modal from './Modal';



const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [_, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeModal, setActiveModal] = useState<'lodge' | 'roommate' | 'list' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        className="relative h-[600px] w-screen overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(${herosvg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `
              translateY(${scrollPosition * 0.5}px) 
              scale(${isHovered ? 1.05 : 1})
            `,
          }}
        >
          {/* Dark Overlay */}
          <div 
            className="absolute inset-0 bg-black/40 transition-opacity duration-700 ease-out" 
            style={{
              opacity: isHovered ? 0.5 : 0.4,
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full w-full px-4">
          <div 
            className="flex flex-col items-center justify-center h-full max-w-7xl mx-auto"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center"
              style={{
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 700ms ease-out',
              }}
            >
              Discover Your <span className="text-yellow-400">Dream Home</span> Today!
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl text-white text-center">
              Explore, Envision, and Make It Yours! Start Your Journey Now.
            </p>

            {/* Action Buttons */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
              <button 
                onClick={() => setActiveModal('lodge')}
                className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Find a Lodge
              </button>

              <button 
                onClick={() => setActiveModal('roommate')}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Find a Roommate
              </button>

              <button 
                onClick={() => setActiveModal('list')}
                className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                List Your Lodge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'lodge'} 
        onClose={() => setActiveModal(null)}
      >
        <FindLodgeForm />
      </Modal>

      <Modal 
        isOpen={activeModal === 'roommate'} 
        onClose={() => setActiveModal(null)}
      >
        <FindLodgeForm /> {/* Replace with RoommateForm */}
      </Modal>

      <Modal 
        isOpen={activeModal === 'list'} 
        onClose={() => setActiveModal(null)}
      >
        <FindLodgeForm /> {/* Replace with ListLodgeForm */}
      </Modal>
    </>
  );
};

export default Hero;