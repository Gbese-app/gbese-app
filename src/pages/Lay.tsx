import  { useState } from 'react';
import IdentityForm from './IdentityForm';

const Lay = () => {
  const [formData, setFormData] = useState<any>({ identityNumber: '1234567890' });  // Example data

  const handleNext = () => {
    console.log('Next clicked');
  };

  const handleBack = () => {
    console.log('Back clicked');
  };

  const handleUpdate = (updatedData: any) => {
    console.log('Updated data:', updatedData);
    setFormData((prevData: any) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  return (
    <div>
      <IdentityForm
        onNext={handleNext}
        onBack={handleBack}
        onUpdate={handleUpdate}
        data={formData}
      />
    </div>
  );
};

export default Lay;
