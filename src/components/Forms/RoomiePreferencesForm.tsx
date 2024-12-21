import React from 'react';
import { Form, Input, Radio, FormInstance } from 'antd';
import { 
  HiOutlineLocationMarker, 
  HiOutlineCurrencyDollar,
  HiOutlineClipboardList
} from 'react-icons/hi';

interface PreferencesFormProps {
  form?: FormInstance;
}

interface FormValues {
  location: string;
  budget: string;
  preferredGender: 'male' | 'female' | 'any';
  description: string;
}

const PreferencesForm: React.FC<PreferencesFormProps> = () => {
  return (
    <div className="space-y-4">
      <Form.Item<FormValues>
        name="location"
        label="Preferred Location"
        tooltip="Enter an area or landmark"
        rules={[{ required: true, message: 'Please enter your preferred location' }]}
      >
        <Input 
          prefix={<HiOutlineLocationMarker className="text-gray-400" />} 
          placeholder="E.g., College road, maryland" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="budget"
        label="Budget"
        rules={[{ required: true, message: 'Please enter your budget' }]}
      >
        <Input 
          prefix={<HiOutlineCurrencyDollar className="text-gray-400" />} 
          placeholder="E.g., ₦50,000 - ₦70,000" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="preferredGender"
        label="Preferred Roommate Gender"
        rules={[{ required: true, message: 'Please select preferred gender' }]}
      >
        <Radio.Group className="space-y-2 flex flex-col">
          <Radio value="male">
            Male Roommate
            <div className="text-xs text-gray-500 ml-6">
              Looking to share with male roommate(s)
            </div>
          </Radio>
          <Radio value="female">
            Female Roommate
            <div className="text-xs text-gray-500 ml-6">
              Looking to share with female roommate(s)
            </div>
          </Radio>
          <Radio value="any">
            No Preference
            <div className="text-xs text-gray-500 ml-6">
              Open to roommates of any gender
            </div>
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item<FormValues>
        name="description"
        label={
          <div className="flex items-center gap-2">
            <HiOutlineClipboardList className="text-gray-400" />
            <span>Additional Requirements</span>
          </div>
        }
        rules={[{ 
          required: true, 
          message: 'Please describe your requirements' 
        }]}
      >
        <Input.TextArea 
          placeholder="Tell us about your preferences for roommate lifestyle, habits, and any specific requirements..."
          rows={4}
        />
      </Form.Item>
    </div>
  );
};

export default PreferencesForm;