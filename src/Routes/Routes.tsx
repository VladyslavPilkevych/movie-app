import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import FilterPage from '../pages/FilterPage';
import MoviePage from '../pages/MoviePage';
import FavoritePage from '../pages/FavoritePage';
import AuthorizationPage from '../pages/AuthorizationPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/auth" element={<AuthorizationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;