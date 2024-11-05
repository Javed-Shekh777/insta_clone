import React, { useEffect, useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


const SignUp = () => {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    dob: "",
    mobile_number: ""
  });

  useEffect(() => {
    alert(step);
  }, [step]);

  const hanldeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }


  const nextStep = () => {
    setStep((step) => step + 1);
  }


  const prevStep = () => {
    setStep((step) => step - 1);
  }


  switch (step) {
    case 1:
      return (
        <Step1
          hanldeForm={hanldeForm}
          nextStep={nextStep}
          formData={form}
        />
      );
    case 2:
      return (
        <Step2
          hanldeForm={hanldeForm}
          nextStep={nextStep}
          prevStep={prevStep}
          formData={form}
        />
      );
    case 3:
      return (
        <Step3
          hanldeForm={hanldeForm}
          nextStep={nextStep}
          prevStep={prevStep}
          formData={form}
        />
      );

  }

}

export default SignUp