import React, { useState } from 'react';
import '../../style/Post.scss';

const Post = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleCreatePost = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setMessage('');
    setHashtags('');
    setSelectedPhoto(null);
  };

  const handleLikePost = () => {
    setLikeCount(likeCount + 1);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="post">
      <button className="create-button" onClick={handleCreatePost}>
        Create
      </button>

      {isPopupOpen && (
        <div className="popup">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="photo-upload"
          />
          {selectedPhoto && (
            <img src={selectedPhoto} alt="Uploaded" className="selected-photo" />
          )}
          <textarea
            className="message-input"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            className="hashtags-input"
            placeholder="Enter hashtags"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
          />
          <button className="close-button" onClick={handleClosePopup}>
            Close
          </button>
        </div>
      )}

      <div className="post-content">
        <p className="message">{message}</p>
        <p className="hashtags">{hashtags}</p>
        <div className="emoji-images">
          {/* Add emojis and images here */}
        </div>
        <div className="actions">
          <button className="like-button" onClick={handleLikePost}>
            Like ({likeCount})
          </button>
          <button className="comment-button">Comment</button>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
