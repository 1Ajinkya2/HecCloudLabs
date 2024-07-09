// import ServiceComponent from '../../components/servicecomponent';
// import { fetchServicesData } from '../lib/data'; 
// import styles from '../_styles/Parallax.module.css';

// export default async function ServicePage() {
//   let services = await fetchServicesData(); 
//   return (
//     <main className="flex min-h-sc  reen flex-col items-center justify-between p-24">
//       <div>
//         <div className={styles.content}>
//           <h1>Our Services</h1>
//           <p>
//             Explore our wide range of services designed to meet your needs and exceed your expectations.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//         {services.map((service, index) => (
//           <ServiceComponent
//             key={index}
//             imageSrc={service.image}
//             imageAlt={service.title}
//             headerText={service.headerText}
//             paragraphText={service.paragraphText}
//           />
//         ))}
//       </div>
//     </main>
//   );
// };
// pages/service.tsx
import React from 'react';
import ServiceComponent from '../../components/servicecomponent';
import { fetchServicesData } from '../lib/data'; 
import styles from '../_styles/Parallax.module.css';

export default async function ServicePage() {
  let services = await fetchServicesData(); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className={styles.content}>
          <h1>Our Services</h1>
          <p>
            Explore our wide range of services designed to meet your needs and exceed your expectations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <ServiceComponent
            key={index}
            imageSrc={service.image}
            imageAlt={service.title}
            headerText={service.title}
            paragraphText={service.info}
          />
        ))}
      </div>
    </main>
  );
}



