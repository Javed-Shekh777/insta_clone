import React, { useState } from 'react';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center ">
      
      <div
        onClick={toggleSwitch}
        className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors duration-200 ease-in-out ${isOn ? 'bg-blue-600' : 'bg-gray-200'}`}
      >
        <span
          className={`transform transition-transform duration-200 ease-in-out absolute left-0 w-5 h-5 bg-white rounded-full shadow ${isOn ? 'translate-x-5' : ''}`}
        />
      </div>
    </div>
  );
};

export default Switch;