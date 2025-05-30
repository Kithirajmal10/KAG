import React from 'react'
 import './style.css'

export const TextField = ({ name, value, onChange, type = "text" }) => {
  const id = name.replace(/\s+/g, '-').toLowerCase();

  // Only allow digits if it's a phone input
  const handleKeyPress = (e) => {
    if (name.toLowerCase().includes('phone') && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="form-group gradient-input-wrapper">
      <input
        type={type}
        id={id}
        placeholder=" "
        required
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        maxLength={10}
      />
      <label htmlFor={id}>{name}*</label>
    </div>
  );
};