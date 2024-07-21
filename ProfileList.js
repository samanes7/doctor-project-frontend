import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Dr. John Doe', likes: 5, comments: [] },
    { id: 2, name: 'Dr. Jane Smith', likes: 8, comments: [] },
    { id: 3, name: 'Dr. Alice Johnson', likes: 3, comments: [] },
  ]);

  const sortAsc = () => {
    const sortedProfiles = [...profiles].sort((a, b) => a.likes - b.likes);
    setProfiles(sortedProfiles);
  };

  const sortDesc = () => {
    const sortedProfiles = [...profiles].sort((a, b) => b.likes - a.likes);
    setProfiles(sortedProfiles);
  };

  const handleLike = (profileId) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === profileId ? { ...profile, likes: profile.likes + 1 } : profile
      )
    );
  };

  const handleAddComment = (profileId, comment) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === profileId ? { ...profile, comments: [...profile.comments, comment] } : profile
      )
    );
  };

  return (
    <div>
      <button onClick={sortAsc}>Sort Ascending</button>
      <button onClick={sortDesc}>Sort Descending</button>
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      ))}
    </div>
  );
};

export default ProfileList;
