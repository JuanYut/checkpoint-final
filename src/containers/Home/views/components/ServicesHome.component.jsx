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
      <h2 className='services-home-title'>Nuestros Servicios:</h2>

      <h2 className='services-home-subtitle'>
        Brindar ayuda al momento es nuestra especialidad
      </h2>

      <h3 className='services-home-description'>
        HelpTraffic te ofrece la posibilidad de acudir a tu ubicación lo antes
        posible. Los servicios que ofrecemos son Cambio de llanta, Recarga de
        gasolina, Cuestiones eléctricas y Servicio de grúa. Conoce mas detalles
        de cada servicio:
      </h3>

      <div className='services-home-options'>
        <div className='services-home-option'>
          <i
            className='fas fa-dot-circle fa-3x'
            style={{ color: '#ff850f' }}
          ></i>
          <h2 className='services-home-option-title'>Cambio de Llanta</h2>
          <h3 className='services-home-option-desc'>
            Cambiamos tu llanta en caso de dañarse, ya sea que tu proporciones
            la llanta nueva, o realices la compra de una llanta con nosotros o
            cualquier otro proveedor que nos indiques.
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-gas-pump fa-3x' style={{ color: '#ff850f' }}></i>
          <h2 className='services-home-option-title'>Recarga de Gasolina</h2>
          <h3 className='services-home-option-desc'>
            Si te quedaste sin gasolina suficiente nosotros podemos rellenar tu
            tanque con la cantidad que nos indiques.
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-bolt fa-3x' style={{ color: '#ff850f' }}></i>
          <h2 className='services-home-option-title'>Cuestión Eléctrica</h2>
          <h3 className='services-home-option-desc'>
            Si necesitas recargar la bateria o alguna otra cuestión eléctrica
            que necesite ser revisada nosotros te podemos auxiliar.
          </h3>
        </div>

        <div className='services-home-option'>
          <i
            className='fas fa-truck-pickup fa-3x'
            style={{ color: '#ff850f' }}
          ></i>
          <h2 className='services-home-option-title'>Servicio de Grua</h2>
          <h3 className='services-home-option-desc'>
            ¿Necesitas mover un vehiculo lo antes posible?, nosotros te
            proporcionaremos un servicio de grúa seguro para ti y tu vehiculo.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
