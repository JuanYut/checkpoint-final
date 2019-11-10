import React from 'react';
// * Components
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';

// * Ant Design Components
// import { Button, DatePicker } from 'antd';

// * Styles
import './home.component.css';

const HomeComponent = () => {
  return (
    <div className='home-container'>
      <NavbarHome />
      <h1>I am the Home Component</h1>
    </div>
  );
};

export default HomeComponent;
