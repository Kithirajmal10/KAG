import React, { useState } from 'react';
import './style.css';
import { images } from '../../assets/images';
import { TextField } from '../TextField';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    sqft: '',
    interested: '',
    location: '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, interested: e.target.value }));
  };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const response = await fetch("https://script.google.com/macros/s/AKfycbw-bZnemGYCJ4atBdflhp_kB7XGFAKKzCjnv3j4cAhe8aXPiygrned3NpzMgGohM4yU/exec", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//   });

//   const result = await response.json();
//   console.log(result);
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "leads"), {
      fullName: formData.fullName,
      phone: formData.phone,
      sqft: formData.sqft,
      interested: formData.interested,
      location: formData.location,
      createdAt: new Date()
    });

    alert("Data saved successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

  return (
    <div className='bgimage'>
      <div className="container">
        <div className="form-box">
          <img src={images.kagLogo} alt="KAG Tiles Logo" className="logo" />
          <h2>Contact Information</h2>
          <p>Please fill out the form below to get started</p>
          <form onSubmit={handleSubmit}>
            <TextField name="Enter your full name" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} />
            <TextField name="Phone Number" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} />
            <TextField name="How many square feet" value={formData.sqft} onChange={(e) => handleChange('sqft', e.target.value)} />
            <br/>
            <div className='form-group-radio'>
              <label>Are you interested in our services? *</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="services" value="Yes" onChange={handleRadioChange} required />
                  Yes
                </label>
                <label>
                  <input type="radio" name="services" value="No" onChange={handleRadioChange} required />
                  No
                </label>
              </div>
            </div>

            <TextField name="Location" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} />
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
