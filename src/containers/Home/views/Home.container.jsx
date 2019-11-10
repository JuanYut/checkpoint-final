import React from 'react';
// * Components
import HomeComponent from './Home.component';
// * Styles
import './home.container.css';

function HomeContainer() {
  return (
    <div className='home-container'>
      {/* HEADER */}
      <HomeComponent />
      {/* FOOTER */}
    </div>
  );
}

export default HomeContainer;
