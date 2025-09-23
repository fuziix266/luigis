import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Viernes.css';

const Viernes = () => {
  const navigate = useNavigate();

  return (
    <div className="promo-del-dia">
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
      <div className="titulo">
        <div className="fondo-boton"></div>
        <span className="promo-del-dia-titulo">Viernes</span>
      </div>
      <div className="promo"></div>
    </div>
  );
};

export default Viernes;
