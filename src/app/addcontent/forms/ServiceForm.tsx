import React, { useState } from 'react';
import '../../_styles/form.css'; 

export default function ServiceForm() {
  const [serviceImage, setServiceImage] = useState(null);
  const [formState, setFormState] = useState({
    serviceName: '',
    serviceDescription: '',
    servicePrice: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setServiceImage(file);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', { ...formState, serviceImage });
    // Reset form state after submission if needed
    setFormState({
      serviceName: '',
      serviceDescription: '',
      servicePrice: '',
    });
    setServiceImage(null);
  };

  const handleCancel = () => {
    // Clear form inputs and reset image state
    setFormState({
      serviceName: '',
      serviceDescription: '',
      servicePrice: '',
    });
    setServiceImage(null);
  };

  return (
    <form className="form-container" style={{ maxWidth: '600px' }}>
      <div className="form-input">
        <label htmlFor="serviceName">Service Name</label>
        <input
          type="text"
          id="serviceName"
          placeholder="Enter Service Name"
          className="form-input-field"
          value={formState.serviceName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="serviceImage">Service Image</label>
        <input
          type="file"
          id="serviceImage"
          accept="image/*"
          onChange={handleImageChange}
          className="form-input-field"
        />
        {serviceImage && (
          <img
            src={URL.createObjectURL(serviceImage)}
            alt="Selected Service Image"
            className="form-image-preview"
          />
        )}
      </div>
      <div className="form-input">
        <label htmlFor="serviceDescription">Service Description</label>
        <textarea
          id="serviceDescription"
          placeholder="Enter Service Description"
          className="form-input-field"
          value={formState.serviceDescription}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="servicePrice">Service Price</label>
        <input
          type="number"
          id="servicePrice"
          placeholder="Enter USD amount"
          className="form-input-field"
          value={formState.servicePrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-actions">
        <button className="form-cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" onClick={handleSubmit} className="form-submit-button">
          Save Service
        </button>
      </div>
    </form>
  );
}
