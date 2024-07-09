import React, { useState } from 'react';
import '../../_styles/form.css'; 

export default function CareerForm() {
  const [formState, setFormState] = useState({
    positionTitle: '',
    location: '',
    responsibilities: '',
    qualifications: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
    // Optionally clear form fields after submission
    setFormState({
      positionTitle: '',
      location: '',
      responsibilities: '',
      qualifications: '',
      contact: '',
    });
  };

  const handleCancel = () => {
    // Clear form inputs
    setFormState({
      positionTitle: '',
      location: '',
      responsibilities: '',
      qualifications: '',
      contact: '',
    });
  };

  return (
    <form className="form-container">
      <div className="form-input">
        <label htmlFor="positionTitle">Position Title</label>
        <input 
          type="text" 
          id="positionTitle" 
          value={formState.positionTitle}
          onChange={handleInputChange}
          placeholder="Enter Position Title"
        />
      </div>
      <div className="form-input">
        <label htmlFor="location">Location</label>
        <input 
          type="text" 
          id="location" 
          value={formState.location}
          onChange={handleInputChange}
          placeholder="Enter Location"
        />
      </div>
      <div className="form-input">
        <label htmlFor="responsibilities">Responsibilities</label>
        <textarea 
          id="responsibilities" 
          value={formState.responsibilities}
          onChange={handleInputChange}
          placeholder="Enter Responsibilities"
          rows={4}
        />
      </div>
      <div className="form-input">
        <label htmlFor="qualifications">Qualifications</label>
        <textarea 
          id="qualifications" 
          value={formState.qualifications}
          onChange={handleInputChange}
          placeholder="Enter Qualifications"
          rows={4}
        />
      </div>
      <div className="form-input">
        <label htmlFor="contact">Contact</label>
        <input 
          type="text" 
          id="contact" 
          value={formState.contact}
          onChange={handleInputChange}
          placeholder="Enter Contact Information"
        />
      </div>
      <div className="form-actions">
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit" onClick={handleSubmit}>Save Career</button>
      </div>
    </form>
  );
}
