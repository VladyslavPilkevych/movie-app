import React from 'react';
import AppRoutes from './Routes/Routes';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingLeft: '5%' }}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(App);
