import React, { useState } from 'react';
import '../../_styles/form.css'; 

export default function BlogForm() {
  const [blogImage, setBlogImage] = useState(null);
  const [formState, setFormState] = useState({
    title: '',
    image: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlogImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
    // Reset form fields after submission (optional)
    setFormState({ title: '', image: '', description: '' });
    setBlogImage(null);
  };

  const handleCancel = () => {
    // Clear form inputs
    setFormState({ title: '', image: '', description: '' });
    setBlogImage(null);
  };

  return (
    <form
      className="form-container"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
      onSubmit={handleSubmit}
    >
      <div className="form-input">
        <label htmlFor="blogTitle">Blog Title</label>
        <input
          type="text"
          id="blogTitle"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
          className="form-input-field"
          placeholder="Enter Blog Title"
        />
      </div>
      <div className="form-input">
        <label htmlFor="blogImage">Blog Image</label>
        <input
          type="file"
          id="blogImage"
          accept="image/*"
          onChange={handleImageChange}
          className="form-input-field"
        />
        {blogImage && (
          <img
            src={URL.createObjectURL(blogImage)}
            alt="Selected Blog Image"
            className="form-image-preview"
          />
        )}
      </div>
      <div className="form-input">
        <label htmlFor="blogDescription">Blog Description</label>
        <textarea
          id="blogDescription"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
          className="form-input-field"
          placeholder="Enter Blog Description"
          rows={4}
        />
      </div>
      <div className="form-actions">
        <button onClick={handleCancel} className="form-cancel-button">Cancel</button>
        <button type="submit" className="form-submit-button">
          Save Blog
        </button>
      </div>
    </form>
  );
}
