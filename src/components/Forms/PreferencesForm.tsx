import { Form, Input, Select } from 'antd';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const PreferencesForm = () => {
  return (
    <div className="space-y-4">
      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: 'Please enter preferred location' }]}
      >
        <Input 
          prefix={<HiOutlineLocationMarker className="text-gray-400" />} 
          placeholder="Enter preferred location" 
        />
      </Form.Item>

      <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, message: 'Please select a state' }]}
      >
        <Select placeholder="Select state">
          <Select.Option value="lagos">Lagos</Select.Option>
          <Select.Option value="abuja">Abuja</Select.Option>
          <Select.Option value="rivers">Rivers</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="budget"
        label="Budget Range"
        rules={[{ required: true, message: 'Please select your budget' }]}
      >
        <Select placeholder="Select budget range">
          <Select.Option value="50000-100000">₦50,000 - ₦100,000</Select.Option>
          <Select.Option value="100000-200000">₦100,000 - ₦200,000</Select.Option>
          <Select.Option value="200000-300000">₦200,000 - ₦300,000</Select.Option>
          <Select.Option value="300000+">Above ₦300,000</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="roomType"
        label="Room Type"
        rules={[{ required: true, message: 'Please select room type' }]}
      >
        <Select placeholder="Select room type">
          <Select.Option value="single">Single Room</Select.Option>
          <Select.Option value="shared">Shared Room</Select.Option>
          <Select.Option value="apartment">Full Apartment</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default PreferencesForm
