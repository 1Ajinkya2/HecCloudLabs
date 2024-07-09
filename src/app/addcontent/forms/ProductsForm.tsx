import React, { useState } from 'react';
import '../../_styles/form.css'; 

export default function ProductForm() {
  const [formState, setFormState] = useState({
    name: '',
    image: null, // Store file object for image
    info: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormState({ ...formState, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data to send to server (if needed)
    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('image', formState.image);
    formData.append('info', formState.info);
    formData.append('price', formState.price);

    // Handle form submission (for demonstration, log FormData)
    console.log(formData);

    // Optionally clear form fields after submission
    setFormState({
      name: '',
      image: null,
      info: '',
      price: '',
    });
  };

  const handleCancel = () => {
    // Clear form inputs
    setFormState({
      name: '',
      image: null,
      info: '',
      price: '',
    });
  };

  return (
    <form className="form-container">
      <div className="form-input">
        <label htmlFor="productName">Product Name</label>
        <input 
          type="text" 
          id="productName" 
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Enter Product Name"
        />
      </div>
      <div className="form-input">
        <label htmlFor="productImage">Product Image</label>
        <input 
          type="file" 
          id="productImage" 
          name="image"
          onChange={handleImageChange}
          accept="image/*"
        />
        {formState.image && (
          <img
            src={URL.createObjectURL(formState.image)}
            alt="Selected Product Image"
            style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }}
          />
        )}
      </div>
      <div className="form-input">
        <label htmlFor="productInfo">Information</label>
        <textarea 
          id="productInfo" 
          name="info"
          value={formState.info}
          onChange={handleInputChange}
          placeholder="Enter Product Information"
          rows={4}  
        />
      </div>
      <div className="form-input">
        <label htmlFor="productPrice">Price</label>
        <input 
          type="text" 
          id="productPrice" 
          name="price"
          value={formState.price}
          onChange={handleInputChange}
          placeholder="Enter Product Price"
        />
      </div>
      <div className="form-actions">
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit" onClick={handleSubmit}>Save Product</button>
      </div>
    </form>
  );
}
