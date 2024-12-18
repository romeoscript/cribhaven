import React from 'react';
import { Form, Input, Select, FormInstance } from 'antd';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

interface PersonalInfoFormProps {
  form?: FormInstance;
}

interface FormValues {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Gender: 'male' | 'female';
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = () => {
  return (
    <div className="space-y-4">
      <Form.Item<FormValues>
        name="FirstName"
        label="First Name"
        rules={[{ required: true, message: 'Please enter your first name' }]}
      >
        <Input 
          prefix={<HiOutlineUser className="text-gray-400" />} 
          placeholder="Enter your first name" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="LastName"
        label="Last Name"
        rules={[{ required: true, message: 'Please enter your last name' }]}
      >
        <Input 
          prefix={<HiOutlineUser className="text-gray-400" />} 
          placeholder="Enter your last name" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="EmailAddress"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input 
          prefix={<HiOutlineMail className="text-gray-400" />} 
          placeholder="you@example.com" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="PhoneNumber"
        label="Phone"
        rules={[
          { required: true, message: 'Please enter your phone number' },
          { pattern: /^\d{10,}$/, message: 'Please enter a valid phone number' }
        ]}
      >
        <Input 
          prefix={<HiOutlinePhone className="text-gray-400" />} 
          placeholder="Enter your phone number" 
        />
      </Form.Item>

      <Form.Item<FormValues>
        name="Gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select your gender' }]}
      >
        <Select placeholder="Select gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default PersonalInfoForm;