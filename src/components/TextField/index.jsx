import React from 'react'
 import './style.css'

export const TextField = ({ name, value, onChange, type = "text", length }) => {
  const id = name.replace(/\s+/g, '-').toLowerCase();

  // Only allow digits if it's a phone input
  const handleKeyPress = (e) => {
    if(type === 'phone' ){
      if ( !e.target.value ||/^[0-9\b]+$/.test(e.target.value) && length >= e.target.value.length) {
        onChange(e)
      }
    }else{
      onChange(e)
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
        onChange={handleKeyPress}
      />
      <label htmlFor={id}>{name}*</label>
    </div>
  );
};