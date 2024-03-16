import React, { useState, useEffect } from 'react';
import '/home/suubi7/OpenMRS-Tickets/Loading/loading/src/Loading.css'; // Import the CSS file

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading ${isLoading ? 'show' : ''}`}>
      <img src="../openmrs-1418463982.png" alt="" />
     <div className='loading-text'>
        <h3>Loading... </h3>
     </div>
    </div>
  );
};

export default Loading;
