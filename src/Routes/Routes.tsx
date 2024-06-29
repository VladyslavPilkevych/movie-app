import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import SettingsPage from '../pages/SettingsPage';
import FavoritePage from '../pages/FavoritePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;