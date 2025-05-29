import React from 'react'
 import './style.css'

export const TextField = ({ name, value, onChange }) => {
  const id = name.replace(/\s+/g, '-').toLowerCase(); // generate id from name

  return (
    <div class="form-group gradient-input-wrapper">
    <input type="text" id={id} placeholder=" "required value={value} onChange={onChange}  />
    <label htmlFor={id}>{name}*</label>
    </div>
    // <div className="form-group">
    //   <div className="gradient-input-wrapper">
    //     <input type="text" id={name} required className="gradient-input" placeholder=" " />
    //   </div>
    //   <label htmlFor={name}>{name}*</label>
    // </div>
  )
}
