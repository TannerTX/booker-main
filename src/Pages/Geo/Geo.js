export async function fetchVisitorLocation() {
    try {
      const accessKey = 'e2b64f7afa2062b5bcc1c9fdb634e8c5';
      const response = await fetch(`https://api.ipstack.com/check?access_key=${accessKey}`);
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch location:', error);
      return null;
    }
  }
  
  import React, { useEffect, useState } from 'react';
  
  export default function VisitorInfo() {
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      fetchVisitorLocation().then(setLocation);
    }, []);
  
    return (
      <div>
        {location ? (
          <div>
            <p>IP: {location.ip}</p>
            <p>Country: {location.country_name}</p>
            <p>Region: {location.region_name}</p>
            <p>City: {location.city}</p>
          </div>
        ) : (
          <p>Loading location...</p>
        )}
      </div>
    );
  }
  