import React, { memo } from 'react';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingLeft: '5%' }}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default memo(App);
