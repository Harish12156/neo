import React, { useState, useEffect, useRef } from 'react';
import Legalentity from './Legalentity';
import Individual from './Individual';
import Ubo from './Ubo';

function Useraccountform() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    legalEntity: {},
    individual: {},
    ubo: {},
  });

  const sigPad = useRef(null);

  const clearSignature = () => {
    sigPad.current.clear();
  };

  // Scroll to the top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = (section, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form Data:', formData);
  };

  return (
    <div className='Useraccountform'>
      <div className='bef-login-home-sec pb-5'>
        <div className='container justify-content-center form-section'>
          <div className='row'>
            <div className='col-lg-10 mx-auto'>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <Legalentity
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                  />
                )}
                {step === 2 && (
                  <Individual
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                )}
                {step === 3 && (
                  <Ubo
                    formData={formData}
                    handleChange={handleChange}
                    handlePrevious={handlePrevious}
                    handleSubmit={handleSubmit}
                    sigPad={sigPad}
                    clearSignature={clearSignature}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Useraccountform;
