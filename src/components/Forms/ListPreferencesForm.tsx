import React from 'react';
import { Form, Input, FormInstance } from 'antd';
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardList,
  HiOutlinePhone
} from 'react-icons/hi';

interface LodgeDetailsFormProps {
  form?: FormInstance;
}

interface FormValues {
  location: string;
  budget: string;
  description: string;
  caretakerContact: string;
}

const LodgeDetailsForm: React.FC<LodgeDetailsFormProps> = () => {
  return (
    <div className="space-y-4">
      <Form.Item<FormValues>
        name="location"
        label="Lodge Location"
        tooltip="Enter the exact location of the lodge"
        rules={[{ required: true, message: 'Please enter the lodge location' }]}
      >
        <Input
          prefix={<HiOutlineLocationMarker className="text-gray-400" />}
          placeholder="E.g., 123 College road, maryland"
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="budget"
        label="Price"
        rules={[{ required: true, message: 'Please enter the lodge price' }]}
      >
        <Input
          prefix={<HiOutlineCurrencyDollar className="text-gray-400" />}
          placeholder="E.g., ₦150,000"
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="description"
        label={
          <div className="flex items-center gap-2">
            <HiOutlineClipboardList className="text-gray-400" />
            <span>Lodge Description</span>
          </div>
        }
        rules={[{
          required: true,
          message: 'Please provide a description of the lodge'
        }]}
      >
        <Input.TextArea
          placeholder="Describe the lodge features, amenities, and any specific requirements..."
          rows={4}
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="caretakerContact"
        label={
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-gray-400" />
            <span>Caretaker/ Lawyer Contact</span>
          </div>
        }
        rules={[{
          required: true,
          message: 'Please provide caretaker contact information'
        }]}
      >
        <Input
          placeholder="Enter caretaker's phone number"
        />
      </Form.Item>
      <p className="text-sm text-gray-500 italic mt-1">
        NB: We won't reach out to the caretaker/lawyer without your permission.
      </p>
    </div>
  );
};

export default LodgeDetailsForm;