import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How Does CribHaven Ensure Listings Are Verified?",
      answer: "Our verification process includes thorough checks of property documentation, owner credentials, and physical verification of listed properties. We also collect and verify landlord information and maintain updated property records."
    },
    {
      question: "Can I Schedule Virtual Tours?",
      answer: "Yes, you can schedule virtual tours through our platform. Simply select the 'Virtual Tour' option on any listing and choose your preferred time slot. Our team will coordinate with the property owner to facilitate the virtual viewing."
    },
    {
      question: "What Are the Payment Options?",
      answer: "We offer multiple secure payment options including bank transfers, credit/debit cards, and digital wallets. All transactions are processed through our secure payment gateway with transparent fee structures."
    },
    {
      question: "Is There a Fee for Using CribHaven?",
      answer: "CribHaven is free to use for property browsing and searching. We only charge a small service fee when you successfully book a property through our platform. There are no hidden charges or subscription fees."
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border-2 border-green-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <Plus className="w-6 h-6 text-green-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-4 bg-white border-t border-green-100"
                  >
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQAccordion;