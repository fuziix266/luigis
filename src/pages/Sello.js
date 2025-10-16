import React from 'react';
import './Sello.css';
import logo from '../assets/images/logoLuigisSinFondo1.png';
import fondo from '../assets/images/fondo.png';

const Sello = () => {
  return (
    <div className="sello-page" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="container-custom">
        <img src={logo} alt="Luigi's Pizzeria" className="img-fluid logo-luigis" />

        <h1 className="mb-4">¡IMPORTANTE: Sello de Seguridad Luigi's!</h1>

        <p>
          En Luigi's Pizzería, nos preocupamos por la frescura y la seguridad de tu pedido. Este sello garantiza que tu caja no ha sido abierta desde que salió de nuestra cocina.
        </p>

        <p>
          <strong>Si notas que este sello está roto o manipulado, por favor, avísanos de inmediato.</strong>
        </p>

        <p className="text-start mt-4"><strong>Instrucciones para reportar:</strong></p>
        <ul className="instructions-list">
          <li>Antes de abrir la caja, verifica el estado del sello.</li>
          <li>Si está roto, toma una foto clara del sello y la caja.</li>
          <li>Desde el momento de la entrega, tienes 10 minutos para reportar cualquier anomalía en el sello.</li>
          <li>Utiliza el botón de WhatsApp a continuación para enviarnos un mensaje con tu reporte y la foto.</li>
        </ul>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
          <a href="https://api.whatsapp.com/send?phone=56972461072&text=Quiero%20reportar%20un%20sello%20roto" target="_blank" rel="noreferrer" className="btn btn-custom-whatsapp">
            Enviar WhatsApp
          </a>
          <a href="https://www.luigis.cl" target="_self" className="btn btn-custom-luigis">
            Llevarme a Luigi's
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sello;
