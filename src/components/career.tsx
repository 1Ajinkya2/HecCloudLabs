import React from 'react';
import styles from '../app/_styles/Parallax.module.css'; 

const CareerComponent = ({ job }) => {
  const { positionTitle, location, responsibilities, qualifications, contact } = job;

  return (
    <div className={styles.section}>
      <h2>Position Title</h2>
      <p>{positionTitle}</p>
      
      <h2>Location</h2>
      <p>{location}</p>
      
      <h2>Responsibilities</h2>
      <p>{responsibilities}</p>
      
      <h2>Qualifications</h2>
      <p>{qualifications}</p>
      
      <h2>Contact</h2>
      <p>{contact}</p>
    </div>
  );
};

export default CareerComponent;
