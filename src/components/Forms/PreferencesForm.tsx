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
  Location: string;
  Budget: string;
  RoomType: 'single' | 'selfcon' | 'flat';
  requirements: string[];
}

const PreferencesForm: React.FC<PreferencesFormProps> = () => {
  return (
    <div className="space-y-4">
      <Form.Item<FormValues>
        name="Location"
        label="Location "
        tooltip="Enter an area or landmark"
        rules={[{ required: true, message: 'Please enter your preferred location' }]}
      >
        <Input 
          prefix={<HiOutlineLocationMarker className="text-gray-400" />} 
          placeholder="E.g., College road, maryland" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="Budget"
        label="Yearly Budget Range"
        rules={[{ required: true, message: 'Please enter your yearly budget range' }]}
      >
        <Input 
          prefix={<HiOutlineCurrencyDollar className="text-gray-400" />} 
          placeholder="E.g., ₦300,000 - ₦400,000" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="RoomType"
        label="Type of Lodge"
        rules={[{ required: true, message: 'Please select lodge type' }]}
      >
        <Radio.Group className="space-y-2 flex flex-col">
          <Radio value="single">
            Single Room
            <div className="text-xs text-gray-500 ml-6">
              One room with shared toilet and kitchen
            </div>
          </Radio>
          <Radio value="selfcon">
            Self Contained
            <div className="text-xs text-gray-500 ml-6">
              Room with your own toilet and kitchen
            </div>
          </Radio>
          <Radio value="flat">
            Flat
            <div className="text-xs text-gray-500 ml-6">
              2 or 3 bedroom apartment with living room
            </div>
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item<FormValues>
        name="requirements"
        label="Additional Requirements"
      >
        <Input 
          prefix={<HiOutlineClipboardList className="text-gray-400" />} 
          placeholder="E.g., Running Water, Generator, Tiled Floor" 
        />
      </Form.Item>
    </div>
  );
};

export default PreferencesForm;