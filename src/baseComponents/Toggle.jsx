import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      className={`relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-[#5A6069]" : "bg-[#5A6069]"
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
