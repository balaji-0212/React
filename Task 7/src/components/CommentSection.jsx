import { useState } from 'react';

function CommentSection() {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    'Strong software profile with a clean project focus.',
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedComment = commentText.trim();

    if (!trimmedComment) {
      return;
    }

    setComments((currentComments) => [trimmedComment, ...currentComments]);
    setCommentText('');
  };

  return (
    <section className="comment-section" aria-label="Profile comments">
      <h2>Comments</h2>

      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
          placeholder="Add a professional note..."
          aria-label="Add a comment"
        />
        <button type="submit">Add Comment</button>
      </form>

      <div className="comment-list">
        {comments.map((comment, index) => (
          <article className="comment-item" key={`${comment}-${index}`}>
            <span>{comment.charAt(0).toUpperCase()}</span>
            <p>{comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
