import React from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import './navbarHome.component.css';
import { Button, Popover, Icon } from 'antd';
import logo from '../../../media/Logo-HelpTraffic.png';

const NavbarHomeComponent = () => {
  // * MOBILE Content
  const content = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <h3>Sobre Nosotros</h3>
      </Link>

      <Link to='/login'>
        <Button icon='user' type='primary'>
          Iniciar Sesión
        </Button>
      </Link>

      <Link to='/register'>
        <Button icon='user-add' type='primary'>
          Registrarse
        </Button>
      </Link>
    </div>
  );
  // * MOBILE
  const contentSizeMobile = (
    <div className='navbarHome-sub2'>
      <Popover placement='bottomRight' content={content} trigger='click'>
        <Icon type='menu' />
      </Popover>
    </div>
  );

  // * COMPUTER
  const contentSizeComputer = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <h3>Sobre Nosotros</h3>
      </Link>

      <Link to='/login'>
        <Button icon='user' type='primary'>
          Iniciar Sesión
        </Button>
      </Link>

      <Link to='/register'>
        <Button icon='user-add' type='primary'>
          Registrarse
        </Button>
      </Link>
    </div>
  );

  return (
    <div className='navbarHome-container'>
      <div className='navbarHome-sub1'>
        <Link to='/'>
          <img src={logo} alt='logo-helptraffic' />
          <h1>HelpTraffic</h1>
        </Link>
      </div>
      {/* Show the menu for mobile or laptop depends the display size */}
      {/* const isMobile = /iPhone|Android/i.test(navigator.userAgent); */}
      {window.innerWidth <= 630 ? contentSizeMobile : contentSizeComputer}
    </div>
  );
};

export default NavbarHomeComponent;
