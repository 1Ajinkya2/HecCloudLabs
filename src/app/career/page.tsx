import { fetchCareerData } from '@/app/lib/data';
import React from 'react';
import CareerComponent from '../../components/career'; 
import styles from '../_styles/Parallax.module.css'; 

export default async function CareerPage() {
  let data = await fetchCareerData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.parallax}>
        <div className={styles.content}>
          <h1>Career at Hectronic</h1>
          <p>
            Join Hectronic and be part of a team that innovates and leads in the tech industry. We are committed to providing an inclusive and dynamic work environment.
          </p>
        </div>
      </div>
      
      {data.map((job, index) => (
        <CareerComponent key={index} job={job} />
      ))}
    </main>
  );
}