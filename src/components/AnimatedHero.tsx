import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import hero from '../assets/home/hero.svg';
import lady1 from '../assets/People/lady1.svg';
import lady2 from '../assets/People/lady2.svg';
import lady3 from '../assets/People/lady3.svg';
import { FindLodgeForm } from './Forms/FindLodgeForm';

const AnimatedHero = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const buttons = [
    {
      id: 'find-lodge',
      text: 'Find Lodge',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      delay: 0.2
    },
    {
      id: 'find-roommate',
      text: 'Find Roommate',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      delay: 0.3
    },
    {
      id: 'list-lodge',
      text: 'List Your Lodge',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      delay: 0.4
    }
  ];


  return (
    <div className="relative w-full bg-[#F8F3ED] px-4 py-16" id="home">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Ideal Off-Campus Home - Safe, Simple, Secure
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Explore verified listings with no agent fees and secure payments. 
            Your perfect student housing is just a click away!
          </p>

          {/* Animated Buttons Container */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {buttons.map((button) => (
              <motion.button
                key={button.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: button.delay }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveModal(button.id)}
                className={`${button.color} ${button.hoverColor} text-white px-8 py-3 rounded-full text-lg font-medium transition-colors`}
              >
                {button.text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Image Section with Floating Badges */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Badges remain the same... */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -left-6 top-16 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 z-10 max-md:hidden"
          >
            <span className="text-green-600 font-bold text-2xl">✗</span>
            <span className="font-medium">No Agent Fees</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute left-12 -bottom-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 z-10 max-md:hidden"
          >
            <div className="bg-purple-100 p-1 rounded">
              <span role="img" aria-label="support" className="text-purple-600">💬</span>
            </div>
            <span className="font-medium">24/7 Support</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-6 top-16 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 z-10 max-md:hidden"
          >
            <div className="flex -space-x-2">
              <img src={lady1} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
              <img src={lady2} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
              <img src={lady3} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
            </div>
            <span className="font-medium">Trusted Landlords</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden bg-gray-50"
          >
            <img 
              src={hero}
              alt="Student using laptop on couch" 
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <Modal isOpen={true} onClose={() => setActiveModal(null)}>
   
            <FindLodgeForm />

        </Modal>
      )}
    </div>
  );
};

export default AnimatedHero;