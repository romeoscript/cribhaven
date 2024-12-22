import { useState } from 'react';
import { Form, Alert } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalInfoForm from './PersonalInfoForm';
import PreferencesForm from './PreferencesForm';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import logo from '../../assets/home/logo.svg';

export const FindLodgeForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


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



  const next = async (e: React.MouseEvent) => {
    e.preventDefault(); 
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
    setErrorMessage('');
    try {
      // Log the entire form values
      console.log(values)
      const allValues = form.getFieldsValue(true);
      console.log('ALL FORM VALUES:', allValues);
  
    
      const payload = {
        firstName: allValues.FirstName || '',
        lastName: allValues.LastName || '',
        email: allValues.EmailAddress || '',
        phone: allValues.PhoneNumber || '',
        gender: allValues.Gender || '',
        location: allValues.Location || '',
        budget: allValues.Budget || '',
        roomType: allValues.RoomType || '',
        requirements: typeof allValues.requirements === 'string' 
        ? allValues.requirements 
        : allValues.requirements?.join(', ') || ''
      };
  
      const response = await fetch(
        'https://cribhavenbackend.onrender.com/api/lodge', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }
      );
    
      if (!response.ok) {
        const errorData = await response.json();
        // Handle the Email Octopus error specifically
        if (errorData.error === "Failed to subscribe contact to Email Octopus") {
          try {
            const details = JSON.parse(errorData.details);
            if (details.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
              throw new Error('This email is already registered.');
            }
          } catch {
            throw new Error('Unable to register. Please try again.');
          }
        }
        throw new Error('Unable to submit form. Please try again.');
      }
  
      const responseData = await response.json();
      console.log(responseData, 'freaking response');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      console.error('Submission failed:', error);
    
    // Set user-friendly error message
    setErrorMessage(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred. Please try again.'
    );
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

            {/* Error Message Alert */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                <Alert 
                  message={errorMessage}
                  type="error"
                  showIcon 
                  icon={<AlertTriangle className="text-red-500" />}
                  closable
                  onClose={() => setErrorMessage('')}
                  className="max-w-lg mx-auto"
                />
              </motion.div>
            )}

            {/* Existing steps indicator and form code remains the same */}
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
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/available-lodges'}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Browse Available Lodges
            </motion.button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};