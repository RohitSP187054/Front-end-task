import React, { useState, useEffect } from 'react';
import Map from './Map';
import './styles.css';

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Leo das',
      description: 'A friendly person',
      address: '123 Main St, Anytown, CA 12345',
      photo: 'https://example.com/avatar.jpg',
    },
    // Add more profiles as needed
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="container">
      <h1>Profile Map Application</h1>
      <div className="profiles">
        {profiles.map(profile => (
          <div className="profile-card" key={profile.id}>
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <button onClick={() => handleSummaryClick(profile)}>View on Map</button>
          </div>
        ))}
      </div>
      {selectedProfile && <Map address={selectedProfile.address} />}
    </div>
  );
};

export default App;