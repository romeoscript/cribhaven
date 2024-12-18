import React from 'react';
import { Form, Input, Select, Radio, FormInstance } from 'antd';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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
          placeholder="E.g., College road, maryland," 
        />
      </Form.Item>
{/* TODO turn to an input field  */}
      <Form.Item<FormValues>
        name="Budget"
        label="Yearly Budget Range"
        rules={[{ required: true, message: 'Please select your budget range' }]}
      >
        <Select placeholder="Select your yearly budget">
          <Select.Option value="150000-200000">₦150,000 - ₦200,000</Select.Option>
          <Select.Option value="200000-300000">₦200,000 - ₦300,000</Select.Option>
          <Select.Option value="300000-400000">₦300,000 - ₦400,000</Select.Option>
          <Select.Option value="400000-500000">₦400,000 - ₦500,000</Select.Option>
          <Select.Option value="500000-600000">₦500,000 - ₦600,000</Select.Option>
          <Select.Option value="600000+">Above ₦600,000</Select.Option>
        </Select>
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
        <Select
          mode="multiple"
          placeholder="Select desired features"
          className="w-full"
        >
          <Select.Option value="water">Running Water</Select.Option>
          <Select.Option value="light">Steady Light</Select.Option>
          <Select.Option value="generator">Generator</Select.Option>
          <Select.Option value="tiled">Tiled Floor</Select.Option>
          <Select.Option value="wardrobe">Wardrobe</Select.Option>
          <Select.Option value="balcony">Balcony</Select.Option>
          <Select.Option value="bathroom">Personal Bathroom</Select.Option>
          <Select.Option value="kitchen">Personal Kitchen</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default PreferencesForm;