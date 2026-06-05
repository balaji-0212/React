import { Moon, Save, Sun } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader.jsx';
import { useAppState } from '../state/AppContext.jsx';

export default function Settings() {
  const { state, dispatch } = useAppState();
  const [settings, setSettings] = useState(state.settings);
  const [saved, setSaved] = useState(false);

  function updateSetting(name, value) {
    setSettings((current) => ({ ...current, [name]: value }));
    setSaved(false);
  }

  function submitSettings(event) {
    event.preventDefault();
    dispatch({ type: 'SAVE_SETTINGS', payload: settings });
    setSaved(true);
  }

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Settings"
        title="Personalize the workspace"
        description="Tune notifications, visual preference, and career targeting without leaving the browser."
      />
      <form className="panel settings-grid" onSubmit={submitSettings}>
        <section>
          <h2>Appearance</h2>
          <div className="segmented-tabs compact">
            <button type="button" className={settings.theme === 'light' ? 'active' : ''} onClick={() => updateSetting('theme', 'light')}>
              <Sun size={16} /> Light
            </button>
            <button type="button" className={settings.theme === 'dark' ? 'active' : ''} onClick={() => updateSetting('theme', 'dark')}>
              <Moon size={16} /> Dark
            </button>
          </div>
        </section>
        <section>
          <h2>Preferences</h2>
          <label className="toggle-row">
            <span>
              Email digest
              <small>Weekly reminders for resources and saved roles</small>
            </span>
            <input type="checkbox" checked={settings.emailDigest} onChange={(event) => updateSetting('emailDigest', event.target.checked)} />
          </label>
          <label className="toggle-row">
            <span>
              Focus mode
              <small>Prioritize deep-work planning signals</small>
            </span>
            <input type="checkbox" checked={settings.focusMode} onChange={(event) => updateSetting('focusMode', event.target.checked)} />
          </label>
        </section>
        <section className="form-grid">
          <h2 className="full-span">Targeting</h2>
          <label>
            Target role
            <input value={settings.targetRole} onChange={(event) => updateSetting('targetRole', event.target.value)} />
          </label>
          <label>
            Preferred location
            <input value={settings.preferredLocation} onChange={(event) => updateSetting('preferredLocation', event.target.value)} />
          </label>
        </section>
        <div className="form-actions">
          {saved ? <span className="success-text">Settings saved</span> : null}
          <button className="button" type="submit">
            <Save size={16} /> Save settings
          </button>
        </div>
      </form>
    </div>
  );
}
