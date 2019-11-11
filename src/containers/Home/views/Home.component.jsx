import React from 'react';
import { Link } from 'react-router-dom';
// * Components

// * Ant Design Components
import { Button } from 'antd';

// * Styles
import './home.component.css';
import MainImgHome from '../../../media/main-img-home.jpg';

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <div className='home-section-1'>
        <img
          className='home-section-1-img'
          src={MainImgHome}
          alt='main-img-help-traffic'
        />
        <div className='home-section-1-info'>
          <h2 className='home-section-1-title'>
            El mejor servicio de asistencia vial
          </h2>
          <h3 className='home-section-1-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus dicta quam eligendi assumenda tempore. Minima velit
            voluptates pariatur ipsam nobis omnis corporis qui vitae repellat
            distinctio. Cumque eveniet deserunt possimus.
          </h3>
          <div className='home-section-1-btns'>
            <Link to='/register'>
              <Button className='section-1-btn1' icon='user-add' type='primary'>
                Registrarse
              </Button>
            </Link>

            <Link to='/about'>
              <Button
                className='section-1-btn2'
                icon='question-circle'
                type='primary'
              >
                Saber mas
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='home-section-2'>Seccion 2 - Servicios</div>
      <div className='home-section-3'>Seccion 3 - Mapa</div>
    </div>
  );
};

export default HomeComponent;
