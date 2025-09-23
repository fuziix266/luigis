import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pizzas.css';

import line2 from '../assets/vectors/line2_x2.svg';
import line31 from '../assets/vectors/line31_x2.svg';
import line4 from '../assets/vectors/line4_x2.svg';
import line5 from '../assets/vectors/line5_x2.svg';
import line61 from '../assets/vectors/line61_x2.svg';
import line7 from '../assets/vectors/line7_x2.svg';
import line81 from '../assets/vectors/line81_x2.svg';
import line9 from '../assets/vectors/line9_x2.svg';
import line10 from '../assets/vectors/line10_x2.svg';


const Pizzas = () => {
  const navigate = useNavigate();

  return (
    <div className="pizzas">
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
        <span className="pizzas-1">Pizzas</span>
      </div>
      <div className="contenido">
        <div className="pclasica-2"></div>
        <img className="separador" src={line2} alt="separator" />
        <div className="pnapolitana-1"></div>
        <img className="separador" src={line31} alt="separator" />
        <div className="pdipollo-1"></div>
        <img className="separador" src={line4} alt="separator" />
        <div className="hawaiana-1"></div>
        <img className="separador" src={line5} alt="separator" />
        <div className="napoles-1"></div>
        <img className="separador" src={line61} alt="separator" />
        <div className="espaola-1"></div>
        <img className="separador" src={line7} alt="separator" />
        <div className="vegetariana-1"></div>
        <img className="separador" src={line81} alt="separator" />
        <div className="barbecue-1"></div>
        <img className="separador" src={line9} alt="separator" />
        <div className="mediterranea-1"></div>
        <img className="separador" src={line10} alt="separator" />
        <div className="luigis-1"></div>
      </div>
    </div>
  );
};

export default Pizzas;
