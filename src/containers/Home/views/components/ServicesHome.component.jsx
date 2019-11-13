import React from 'react';
// * Styles
import './servicesHome.component.css';
import logoHelpTraffic from '../../../../media/Logo-HelpTraffic-happy.png';

const ServicesHome = () => {
  return (
    <div className='services-home'>
      <img
        className='services-home-img'
        src={logoHelpTraffic}
        alt='logo-help-traffic'
      />
      <h2 className='services-home-title'>Nuestros Servicios</h2>

      <h2 className='services-home-subtitle'>
        Brindar ayuda al momento es nuestra especialidad
      </h2>

      <h3 className='services-home-description'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eaque,
        doloremque, harum voluptas repudiandae rerum accusamus aut nam, atque
        iusto nemo autem facere unde voluptatem a ratione explicabo! Aliquid,
        vitae.
      </h3>

      <div className='services-home-options'>
        <div className='services-home-option'>
          <i class='fas fa-dot-circle fa-3x' style={{ color: '#ff850f' }}></i>
          <h2 className='services-home-option-title'>Cambio de llanta</h2>
          <h3 className='services-home-option-desc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            autem! Obcaecati saepe rerum laboriosam amet.
          </h3>
        </div>

        <div className='services-home-option'>
          <i class='fas fa-gas-pump fa-3x' style={{ color: '#ff850f' }}></i>
          <h2 className='services-home-option-title'>Gasolina</h2>
          <h3 className='services-home-option-desc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            autem! Obcaecati saepe rerum laboriosam amet.
          </h3>
        </div>

        <div className='services-home-option'>
          <i class='fas fa-bolt fa-3x' style={{ color: '#ff850f' }}></i>
          <h2 className='services-home-option-title'>Electrico</h2>
          <h3 className='services-home-option-desc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            autem! Obcaecati saepe rerum laboriosam amet.
          </h3>
        </div>

        <div className='services-home-option'>
          <i class='fas fa-truck-pickup fa-3x' style={{ color: '#ff850f' }}></i>
          <h2 className='services-home-option-title'>Grua</h2>
          <h3 className='services-home-option-desc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            autem! Obcaecati saepe rerum laboriosam amet.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
