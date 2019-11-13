import React from 'react';
// * Components
import MainHome from './components/MainHome.component';

// * Styles
import './home.component.css';

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <MainHome />

      <div className='home-section-2'>Seccion 2 - Servicios</div>
      <div className='home-section-3'>Seccion 3 - Mapa</div>
    </div>
  );
};

export default HomeComponent;
