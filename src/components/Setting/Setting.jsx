import React, { useState } from 'react';
import './SettingsPage.css'; // Add your styles here

const SettingsPage = () => {
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('system');
  const [fontSize, setFontSize] = useState('medium');
  const [model, setModel] = useState('pro');
  const [responseStyle, setResponseStyle] = useState('detailed');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [saveHistory, setSaveHistory] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your chat history?')) {
      // Clear logic here
      alert('Chat history cleared!');
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <section>
        <h2>General</h2>
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add more languages */}
          </select>
        </label>

        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </label>

        <label>
          Font Size:
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </section>

      <section>
        <h2>Chat Preferences</h2>
        <label>
          Model:
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="lite">Lite</option>
            <option value="pro">Pro</option>
          </select>
        </label>

        <label>
          Response Style:
          <select value={responseStyle} onChange={(e) => setResponseStyle(e.target.value)}>
            <option value="concise">Concise</option>
            <option value="detailed">Detailed</option>
            <option value="creative">Creative</option>
          </select>
        </label>

        <label>
          Voice Output:
          <input
            type="checkbox"
            checked={voiceEnabled}
            onChange={() => setVoiceEnabled(!voiceEnabled)}
          />
        </label>
      </section>

      <section>
        <h2>Privacy & Data</h2>
        <label>
          Save Chat History:
          <input
            type="checkbox"
            checked={saveHistory}
            onChange={() => setSaveHistory(!saveHistory)}
          />
        </label>

        <button onClick={handleClearHistory}>Clear Chat History</button>
      </section>

      <section>
        <h2>Notifications</h2>
        <label>
          Enable Notifications:
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </label>
      </section>
    </div>
  );
};

export default SettingsPage;
