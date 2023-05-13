import classNames from "classnames";
import React, { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  value: string;
  className?: string;
  onChange?: (value: string) => void;
};

const Input = ({ className = "", label = "", value, onChange }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={classNames(className, "")}>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Input;
