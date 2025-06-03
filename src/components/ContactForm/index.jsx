import React, { useState } from 'react';
import './style.css';
import { images } from '../../assets/images';
import { TextField } from '../TextField';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import {ButtonFiled } from '../Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    sqft: '',
    interested: '',
    location: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, interested: e.target.value }));
  };

const isValidPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isValidPhoneNumber(formData.phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  try {
    await addDoc(collection(db, "leads"), {
      ...formData,
      createdAt: new Date()
    });

    setFormData({
      fullName: '',
      phone: '',
      sqft: '',
      interested: '',
      location: '',
    });

    setShowSuccess(true); // 👈 Show the popup/modal
    // setTimeout(() => setShowSuccess(false), 3000); // Auto-close after 3 seconds (optional)

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
            <TextField  type ='phone' length={10} name="Phone Number" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} />
            <TextField  type ='phone' length={5} name="How many square feet" value={formData.sqft} onChange={(e) => handleChange('sqft', e.target.value)} />
            <div className='form-group-radio'>
              <label>Are you Looking ? *</label>
              <div className="radio-group">
                <label className='gap'>
                  <input type="radio" name="services" checked={formData.interested==='Floor Tiles'} value='Floor Tiles' onChange={handleRadioChange} required />
                   Floor Tiles
                </label>
                <label className ='gap'>
                  <input type="radio" name="services" checked={formData.interested==='Bathroom Tiles'} value='Bathroom Tiles' onChange={handleRadioChange} required />
                  Bathroom Tiles
                </label>
              </div>
            </div>
            <TextField name="Location" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} />
            <ButtonFiled name ="Submit" />
            {showSuccess && (
         <div className="modal-overlay">
          <div className="modal-content">
          <h3>🎉 Thank You!</h3>
          <p>Your details have been successfully submitted.</p>
          <button onClick={() => setShowSuccess(false)}>Close</button>
       </div>
      </div>
         )}
          </form>
        </div>
      </div>
   
    </div>
    
  );
}
