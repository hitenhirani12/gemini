// src/components/Layout/MainLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import SettingsPage from '../SettingsPage/SettingsPage';

const MainLayout = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setActivePage={setActivePage} />
      <div style={{ flex: 1 }}>
        {activePage === 'home' && <Main userName="Dude" />}
        {activePage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
};

export default MainLayout;
