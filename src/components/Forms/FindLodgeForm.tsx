import { useState } from 'react';
import { Form } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalInfoForm from './PersonalInfoForm';
import PreferencesForm from './PreferencesForm';
import { CheckCircle } from 'lucide-react';
import logo from '../../assets/home/logo.svg';

export const FindLodgeForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    {
      title: 'Personal Info',
      content: <PersonalInfoForm form={form} />
    },
    {
      title: 'Preferences',
      content: <PreferencesForm form={form} />
    }
  ];

  const list_id = import.meta.env.VITE_LODGE_LIST_ID;

  const next = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission on continue
    try {
      if (currentStep === 0) {
        await form.validateFields([
          'firstName',
          'lastName',
          'email',
          'phone',
          'gender'
        ]);
        setCurrentStep(1);
      } else if (currentStep === 1) {
        await form.validateFields([
          'location',
          'budget',
          'roomType'
        ]);
        const values = await form.validateFields();
        await onFinish(values);
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission on back
    setCurrentStep(currentStep - 1);
  };

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      // Get the current form values directly
      const personalInfo = await form.validateFields([
        'firstName',
        'lastName',
        'email',
        'phone',
        'gender'
      ]);
      
      console.log('Personal Info:', personalInfo);
      console.log('Preferences:', values);
      
      const formData = new FormData();
  
      // Add personal info fields from the first step
      formData.append('field[FirstName]', personalInfo.firstName || '');
      formData.append('field[LastName]', personalInfo.lastName || '');
      formData.append('email_address', personalInfo.email || '');
      formData.append('field[Phone]', personalInfo.phone || '');
      formData.append('field[Gender]', personalInfo.gender || '');
  
      // Add preferences from the second step
      formData.append('field[Location]', values.location || '');
      formData.append('field[Budget]', values.budget || '');
      formData.append('field[RoomType]', values.roomType || '');
      formData.append('field[Requirements]', values.requirements?.join(', ') || 'None');
  
      // Debug log
      for (let pair of formData.entries()) {
        console.log('FormData entry:', pair[0], pair[1]);
      }

      const response = await fetch(
        `https://emailoctopus.com/api/1.6/lists/2902da60-b9d0-11ef-9e1a-0dfc70907a13/contacts`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: 'POST',
          body: JSON.stringify({
            api_key: 'eo_9ec1a19489b56b9baaf07b06a83ad49bc604cc0575ff1f045f5aa8325bcdbd31',
            email_address: 'romeobourne211@gmail.com',
            fields: {
              EmailAddress: "romeobourne211@gmail.com",
              FirstName: 'shit',
              LastName: 'romeoscript',
              // SelectedCourse: selectedCourse,
              // HowYouHeard: knowlegeOfTechyJaunt,
              // PhoneNumber: phoneNumber,
              // Gender: gender,
            },
            // tags: ["people"],
            status: "SUBSCRIBED",
          }),
    
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Response error:', errorData);
        throw new Error('Subscription failed');
      }
  
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-8">
              <img src={logo} alt="Crib Haven" className="h-10 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Find Your Perfect Lodge
              </h2>
              <p className="text-gray-600">
                Tell us about yourself and we'll help you find the perfect place.
              </p>
            </div>

            {/* Custom Steps Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 0 ? 'bg-blue-500 text-white' : 
                    currentStep > 0 ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {currentStep > 0 ? '✓' : '1'}
                </div>
                <div className="w-16 h-0.5 bg-gray-200">
                  <div 
                    className="h-full bg-green-500 transition-all duration-300"
                    style={{ width: currentStep > 0 ? '100%' : '0%' }}
                  />
                </div>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  2
                </div>
              </div>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="max-w-lg mx-auto"
            >
              {steps[currentStep].content}

              <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prev}
                    className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={next}
                  disabled={isLoading}
                  className={`ml-auto px-6 py-2 ${
                    isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
                  } text-white rounded-lg transition-colors`}
                >
                  {isLoading 
                    ? 'Processing...' 
                    : currentStep === steps.length - 1 
                    ? 'Submit' 
                    : 'Continue'
                  }
                </button>
              </div>
            </Form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Great! We've Got Your Requirements
            </h2>
            <p className="text-gray-600 mb-8">
              We'll search through available lodges in Enugu that match your preferences.
              Expect a call or email from our agent within 24 hours with the best options for you.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/available-lodges'}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Browse Available Lodges
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};