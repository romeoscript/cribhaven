
import { motion } from 'framer-motion';
import { Search, Calendar, Key } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Search className="w-16 h-16 text-blue-400" />,
      title: "Search and Compare Properties",
      description: "Find verified properties tailored to your budget and preferences",
    },
    {
      icon: <Calendar className="w-16 h-16 text-pink-400" />,
      title: "Book an Inspection or Secure the Property",
      description: "Chose a convenient time for a tour or secure it instantly",
    },
    {
      icon: <Key className="w-16 h-16 text-yellow-400" />,
      title: "Move in With Confidence",
      description: "Complete payments, sign agreements and settle in",
    },
  ];

  return (
    <div className="w-full bg-[#F8F3ED] py-20 px-4" id='why-choose-us'>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why Choose CribHaven?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="flex justify-center mb-6"
              >
                {feature.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="text-xl font-semibold text-center mb-4"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="text-gray-600 text-center"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;