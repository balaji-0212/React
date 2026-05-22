import { useRef, useState } from 'react';
import CommentSection from './CommentSection.jsx';
import LikeButton from './LikeButton.jsx';

function ProfileCard({ profile }) {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState('/profile-placeholder.svg');
  const [imageName, setImageName] = useState('Portfolio portrait');
  const [uploadError, setUploadError] = useState('');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith('image/')) {
      setUploadError('Choose a valid image file.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);
      setImageName(selectedFile.name);
      setUploadError('');
      event.target.value = '';
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <section className="profile-card" aria-label="Profile image upload card">
      <div className="profile-card__visual">
        <div className="profile-image-frame">
          <img src={imagePreview} alt={`${profile.name} profile preview`} />
        </div>

        <input
          ref={fileInputRef}
          className="sr-only"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button className="upload-button" type="button" onClick={handleUploadClick}>
          <span aria-hidden="true">+</span>
          Upload Image
        </button>

        <p className="image-name">{imageName}</p>
        {uploadError && <p className="form-error">{uploadError}</p>}
      </div>

      <div className="profile-card__content">
        <div className="profile-heading">
          <p className="eyebrow">Portfolio Profile</p>
          <h1>{profile.name}</h1>
          <p className="profile-title">{profile.title}</p>
          <p className="profile-location">{profile.location}</p>
        </div>

        <p className="profile-summary">{profile.summary}</p>

        <div className="profile-links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="skill-list" aria-label="Technical skills">
          {profile.highlights.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className="featured-project">
          <span>Featured Project</span>
          <p>{profile.featuredProject}</p>
        </div>

        <LikeButton initialCount={124} />
        <CommentSection />
      </div>
    </section>
  );
}

export default ProfileCard;
