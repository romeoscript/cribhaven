
import { Search, Users, ShieldCheck, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreFeatures = () => {
  const features = [
    {
      icon: <Search className="w-12 h-12 text-orange-400" />,
      title: "Student-Focused Accommodation Search",
      description: "Simplified property search with filters, wishlist management, inspection bookings, and verified listings",
      borderColor: "border-green-100"
    },
    {
      icon: <Users className="w-12 h-12 text-pink-400" />,
      title: "Roommate Pairing",
      description: "Connect with potential lodge mates for shared accommodations",
      borderColor: "border-blue-100"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-yellow-400" />,
      title: "Secure Transactions and Payments",
      description: "Safe payments with transparent commission tracking for property owners or agents ",
      borderColor: "border-yellow-100"
    },
    {
      icon: <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
        <span className="text-blue-600">🔒</span>
      </div>,
      title: "User Verification and Trust",
      description: "Authenticity ensured through verification for both students and property owners",
      borderColor: "border-purple-100"
    },
    {
      icon: <Bell className="w-12 h-12 text-blue-400" />,
      title: "Comprehensive Support and Notifications",
      description: "Real-time notifications, FAQs, and direct customer support for seamless user assistance",
      borderColor: "border-gray-100"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Core Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              className={`p-6 rounded-2xl border-2 ${feature.borderColor} bg-white transition-all duration-300`}
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="mb-4"
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-xl font-semibold mb-3 text-gray-900"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="text-gray-600 text-sm leading-relaxed"
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

export default CoreFeatures;