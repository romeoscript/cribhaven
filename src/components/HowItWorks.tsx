import step1 from '../assets/properties/step1.svg';
import step2 from '../assets/properties/step2.svg';
import step3 from '../assets/properties/step3.svg';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Step 1",
      description: `Click on Find a Lodge, Find a Roommate, or List a Property, depending on what you want to use Crib Haven for. Then, fill in the required information and use filters to narrow down options based on your budget, location, and preferences.
      `,
      image: step1,
      imagePosition: "right"
    },
    {
      number: "2",
      title: "Step 2",
      description: `Once you're done, click Submit, and a Crib Haven agent will reach out to you within 24 hours with more information about the lodge. You can book an inspection to see it in person or virtually. If you're ready to commit, you can Reserve the Property
      `,
      image: step2,
      imagePosition: "left"
    },
    {
      number: "3",
      title: "Step 3",
      description: `Complete you payments safely through CribHaven Agents and sign the rental agreement online. Once everything is set, you're ready to move in and enjoy your new home with confidence.      `,
      image: step3,
      imagePosition: "right"
    }
  ];

  return (
    <div className="w-full bg-[#D9C6B0] py-16 px-4" id='how-it-works'>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
        >
          How It Works
        </motion.h2>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className={`flex flex-col ${step.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
            >
              {/* Text Content */}
              <motion.div
                className="flex-1 space-y-4"
                variants={{
                  hidden: { opacity: 0, x: step.imagePosition === 'left' ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Image */}
              <motion.div
                className="flex-1"
                variants={{
                  hidden: { opacity: 0, x: step.imagePosition === 'left' ? 50 : -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
              >
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;