export const fetchServicesData = async () => {
    try {
      const response = await fetch('https://api.example.com/services');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Error fetching services data:', err);
      return [
        {
          title: 'Default Service Title',
          image: 'https://via.placeholder.com/150',
          info: 'This is a default service description.',
        },
        {
            title: 'Cloud Service',
            image: 'https://via.placeholder.com/150',
            info: 'This is a Cloud service description.',
          },
      ];
    }
  };
  
  export const fetchProductsData = async () => {
    try {
      const response = await fetch('https://api.example.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Error fetching products data:', err);
      return [
        {
          title: 'Default Product Title',
          image: 'https://via.placeholder.com/150',
          info: 'This is a default product description.',
        },
      ];
    }
  };
  
  export const fetchCareerData = async () => {
    try {
      const response = await fetch('https://api.example.com/career');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching career data:', error);
      return [
        {
          positionTitle: 'Default Position Title',
          location: 'Default Location',
          responsibilities: `Lead software & system verification activities.
Work with in-house as well as outsourced development teams to elaborate the requirements and identify suitable test cases to create a highly matured verification test plan.
Own and be responsible to execute manual and automated verification tests on products and systems to ensure integrity and defect-free delivery.
Learn and understand development progress and processes, ensure complete adherence during project execution. Own compliance & adherence to established systems & processes for verification and validation.`,
          qualifications: 'Default Qualifications',
          contact: 'Default Contact Information',
        },
        {
            positionTitle: 'Product Manager',
            location: 'San Francisco',
            responsibilities: 'Managing product lifecycle...',
            qualifications: 'Experience in product management...',
            contact: 'hr@hectronic.com',
          },
      ];
    }
  };
  
  export const fetchPartnersData = async () => {
    try {
      const response = await fetch('https://api.example.com/partners');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Error fetching partners data:', err);
      return [
        {
          title: 'Default Partner Title',
          image: 'https://via.placeholder.com/150',
          info: 'This is a default partner description.',
        },
      ];
    }
  };
  
  export const fetchBlogsData = async () => {
    try {
      const response = await fetch('https://api.example.com/blogs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Error fetching blogs data:', err);
      return [
        {
          title: 'Default Blog Title',
          image: 'https://via.placeholder.com/150',
          info: 'This is a default blog description.',
        },
      ];
    }
  };
  