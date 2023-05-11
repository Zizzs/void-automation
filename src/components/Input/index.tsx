import React, { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  value: string;
  onChange?: (value: string) => void;
};

const Input = ({ label = "", value, onChange }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Input;
