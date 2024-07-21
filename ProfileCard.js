import React, { useState } from 'react';

const ProfileCard = ({ profile, onLike, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    onLike(profile.id);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(profile.id, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>Likes: {profile.likes}</p>
      <button onClick={handleLike}>Like</button>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment"
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <ul>
        {profile.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
