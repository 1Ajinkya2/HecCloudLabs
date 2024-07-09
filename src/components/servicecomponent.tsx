// components/servicecomponent.tsx
import React from 'react';
import Image from 'next/image';

interface ServiceComponentProps {
  imageSrc: string;
  imageAlt: string;
  headerText: string;
  paragraphText: string;
}

const ServiceComponent: React.FC<ServiceComponentProps> = ({ imageSrc, imageAlt, headerText, paragraphText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image src={imageSrc} alt={imageAlt} width={150} height={150} className="rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{headerText}</h2>
      <p className="text-gray-700">{paragraphText}</p>
    </div>
  );
};

export default ServiceComponent;
