
import { useState } from 'react';
import { Form, Steps, Button } from 'antd';
import { FormValues } from './types';
import PersonalInfoForm from './PersonalInfoForm';
import PreferencesForm from './PreferencesForm';
import SuccessStep from './SuccessStep';
import logo from '../../assets/home/logo.svg';

const { Step } = Steps;

export const FindLodgeForm = () => {
  const [form] = Form.useForm<FormValues>();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Personal Info',
      content: <PersonalInfoForm />
    },
    {
      title: 'Preferences',
      content: <PreferencesForm />
    },
    {
      title: 'Confirmation',
      content: <SuccessStep />
    }
  ];

  const next = async () => {
    try {
      if (currentStep === 0) {
        await form.validateFields([
          'firstName',
          'lastName',
          'email',
          'phone',
          'gender'
        ]);
      } else if (currentStep === 1) {
        await form.validateFields([
          'location',
          'state',
          'budget',
          'roomType'
        ]);
      }
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: FormValues) => {
    console.log('Form values:', values);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <img src={logo} alt="Crib Haven" className="h-10 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Find Your Perfect Lodge
        </h2>
        <p className="text-gray-600">
          Tell us about yourself and we'll help you find the perfect place.
        </p>
      </div>

      <Steps current={currentStep} className="mb-8">
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="max-w-lg mx-auto"
      >
        {steps[currentStep].content}

        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <Button onClick={prev}>
              Back
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={next} className="bg-green-600">
              Continue
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};