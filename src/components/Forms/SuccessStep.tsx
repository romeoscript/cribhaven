import { Result } from 'antd';
import { FiCheck } from 'react-icons/fi';

const SuccessStep = () => {
  return (
    <Result
      icon={<FiCheck className="text-green-600 text-4xl" />}
      title="Thank you for choosing Crib Haven"
      subTitle="A Crib Haven agent will reach out to you within 24 hours."
      className="bg-green-50 rounded-lg p-6"
    />
  );
};

export default SuccessStep;