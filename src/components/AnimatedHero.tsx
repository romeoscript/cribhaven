import { motion } from 'framer-motion';
import hero from '../assets/home/hero.svg';
import lady1 from '../assets/People/lady1.svg'
import lady2 from '../assets/People/lady2.svg'
import lady3 from '../assets/People/lady3.svg'

const AnimatedHero = () => {
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

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-12 py-3 rounded-full text-lg font-medium"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Main Image Section with Floating Badges */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* No Agent Fees Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -left-6 top-16 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 z-10"
          >
            <span className="text-green-600 font-bold text-2xl">✗</span>
            <span className="font-medium">No Agent Fees</span>
          </motion.div>

          {/* 24/7 Support Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute left-12 -bottom-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 z-10"
          >
            <div className="bg-purple-100 p-1 rounded">
              <span role="img" aria-label="support" className="text-purple-600">💬</span>
            </div>
            <span className="font-medium">24/7 Support</span>
          </motion.div>

          {/* Trusted Landlords Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-6 top-16 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 z-10"
          >
            <div className="flex -space-x-2">
              <img src={lady1} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
              <img src={lady2} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
              <img src={lady3} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
            </div>
            <span className="font-medium">Trusted Landlords</span>
          </motion.div>

          {/* Main Image Container */}
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
    </div>
  );
};

export default AnimatedHero;