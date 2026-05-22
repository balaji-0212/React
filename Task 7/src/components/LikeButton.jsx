import { useState } from 'react';

function LikeButton({ initialCount = 0 }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialCount);

  const handleLikeToggle = () => {
    const nextLikedState = !isLiked;

    setIsLiked(nextLikedState);
    setLikeCount((currentCount) =>
      nextLikedState ? currentCount + 1 : currentCount - 1
    );
  };

  return (
    <button
      className={`like-button ${isLiked ? 'like-button--active' : ''}`}
      type="button"
      onClick={handleLikeToggle}
      aria-pressed={isLiked}
    >
      <span className="heart-icon" aria-hidden="true">
        &hearts;
      </span>
      <span>{isLiked ? 'Liked' : 'Like'}</span>
      <strong>{likeCount}</strong>
    </button>
  );
}

export default LikeButton;
