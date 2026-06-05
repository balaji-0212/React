import { Save } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader.jsx';
import { useAppState } from '../state/AppContext.jsx';

export default function Profile() {
  const { state, dispatch } = useAppState();
  const [profile, setProfile] = useState(state.profile);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: name === 'weeklyGoal' ? Number(value) : value }));
    setSaved(false);
  }

  function submitProfile(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!profile.name.trim()) nextErrors.name = 'Name is required.';
    if (!profile.email.includes('@')) nextErrors.email = 'Use a valid email address.';
    if (profile.headline.trim().length < 15) nextErrors.headline = 'Add a clearer professional headline.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    dispatch({ type: 'SAVE_PROFILE', payload: profile });
    setSaved(true);
  }

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Profile"
        title="Shape the professional narrative"
        description="Keep the profile aligned with target roles, strengths, and the kind of work you want more of."
      />
      <section className="content-grid two-col">
        <form className="panel form-grid" onSubmit={submitProfile}>
          <label>
            Name
            <input name="name" value={profile.name} onChange={updateField} />
            {errors.name ? <small className="field-error">{errors.name}</small> : null}
          </label>
          <label>
            Email
            <input name="email" value={profile.email} onChange={updateField} />
            {errors.email ? <small className="field-error">{errors.email}</small> : null}
          </label>
          <label>
            Location
            <input name="location" value={profile.location} onChange={updateField} />
          </label>
          <label>
            Weekly goal
            <input name="weeklyGoal" type="number" min="1" max="40" value={profile.weeklyGoal} onChange={updateField} />
          </label>
          <label className="full-span">
            Headline
            <textarea name="headline" rows="3" value={profile.headline} onChange={updateField} />
            {errors.headline ? <small className="field-error">{errors.headline}</small> : null}
          </label>
          <label className="full-span">
            Focus areas
            <textarea name="focus" rows="3" value={profile.focus} onChange={updateField} />
          </label>
          <div className="form-actions full-span">
            {saved ? <span className="success-text">Profile saved</span> : null}
            <button className="button" type="submit">
              <Save size={16} /> Save profile
            </button>
          </div>
        </form>
        <article className="panel profile-preview">
          <span className="avatar-large">{profile.name.charAt(0) || 'C'}</span>
          <h2>{profile.name || 'Professional profile'}</h2>
          <p>{profile.headline}</p>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{profile.focus}</dd>
            </div>
            <div>
              <dt>Weekly target</dt>
              <dd>{profile.weeklyGoal} hours</dd>
            </div>
          </dl>
        </article>
      </section>
    </div>
  );
}
