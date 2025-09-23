import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    const day = today.getDay();
    if (day === 3) { // Wednesday
      setModalOpen(true);
    }
  }, []);

  const handlePromoDelDia = () => {
    const today = new Date();
    const day = today.getDay();
    let page = '';
    switch (day) {
      case 0: page = '/domingo'; break;
      case 1: page = '/lunes'; break;
      case 2: page = '/martes'; break;
      case 3: page = '/miercoles'; break;
      case 4: page = '/jueves'; break;
      case 5: page = '/viernes'; break;
      case 6: page = '/sabado'; break;
      default: page = '/error'; break;
    }
    navigate(page);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="inicio">
      <div className="menu">
        <button className="boton-inicio boton-menu" onClick={() => navigate('/')}>
          <div className="logo-menu"></div>
        </button>
        <button className="boton-facebook boton-menu" onClick={() => window.location.href = 'http://www.facebook.com/Luigispizzaarica1'}>
          <div className="facebook"></div>
        </button>
        <button className="boton-facebook boton-menu" onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=++56972461072&text=Hola!%20Me%20gustaria%20hacer%20un%20pedido!'}>
          <div className="whatsapp"></div>
        </button>
        <button className="boton-facebook boton-menu" onClick={() => window.location.href = 'https://www.instagram.com/luigisarica'}>
          <div className="instagram"></div>
        </button>
        <button className="boton-facebook boton-menu" onClick={() => window.location.href = "https://www.google.cl/maps/dir//Luigi's+Pizza+-+Conrado+R%C3%ADos+1593,+1001085+Arica,+Arica+y+Parinacota/@-18.4856886,-70.3071732,15.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x915aa9c8e55511e9:0xdda7bced3817eaa5!2m2!1d-70.2986061!2d-18.4845687?entry=ttu"}>
          <div className="maps"></div>
        </button>
      </div>
      <div className="logo-2">
        <div className="logo"></div>
      </div>
      <div className="botones">
        <button className="pizzas boton" onClick={() => navigate('/pizzas')}>
          <div className="fondo-boton"></div>
          <span className="texto">Pizzas</span>
        </button>
        <button className="promociones boton" onClick={() => navigate('/promociones')}>
          <div className="fondo-boton"></div>
          <span className="texto">Promociones</span>
        </button>
        <button className="promoDelDia boton" onClick={handlePromoDelDia}>
          <div className="fondo-boton"></div>
          <span className="texto">Promo del día</span>
        </button>
        <button className="armaTuPizza boton" onClick={() => navigate('/arma-tu-pizza')}>
          <div className="fondo-boton"></div>
          <span className="texto">Arma tu Pizza</span>
        </button>
        <button className="ingredientesExtra boton" onClick={() => navigate('/ingredientes-extra')}>
          <div className="fondo-boton"></div>
          <span className="texto">Ingredientes Extra</span>
        </button>
        <button className="bebidasYotross boton" onClick={() => navigate('/bebidas-y-otros')}>
          <div className="fondo-boton"></div>
          <span className="texto">Bebidas y otros</span>
        </button>
      </div>

      {modalOpen && (
        <div id="modalMiércoles" className="modal" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <span className="bannerCerrado" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
