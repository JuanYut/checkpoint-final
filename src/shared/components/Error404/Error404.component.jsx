import React from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import './error404.component.css';
import { Button } from 'antd';
import logo from '../../../media/Logo-HelpTraffic-wow.png';

const Error404Component = () => {
  return (
    <div className='error404-container'>
      <img src={logo} alt='logo-car' />
      <div className='error404-info'>
        <h2 className='error404-title'>404 | Página no encontrada</h2>
        <h3 className='error404-description'>
          No tengas miedo simplemente verifica la URL o vuelve al inicio
        </h3>
        <p className='error404-team'>-El equipo de HelpTraffic</p>
      </div>

      <Link to='/'>
        <Button icon='home' type='primary'>
          Ir al inicio
        </Button>
      </Link>
    </div>
  );
};

export default Error404Component;
