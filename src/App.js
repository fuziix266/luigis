import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import Promociones from './pages/Promociones';
import ArmaTuPizza from './pages/ArmaTuPizza';
import IngredientesExtra from './pages/IngredientesExtra';
import BebidasYOtros from './pages/BebidasYOtros';
import Domingo from './pages/Domingo';
import Lunes from './pages/Lunes';
import Martes from './pages/Martes';
import Miercoles from './pages/Miercoles';
import Jueves from './pages/Jueves';
import Viernes from './pages/Viernes';
import Sabado from './pages/Sabado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/promociones" element={<Promociones />} />
      <Route path="/arma-tu-pizza" element={<ArmaTuPizza />} />
      <Route path="/ingredientes-extra" element={<IngredientesExtra />} />
      <Route path="/bebidas-y-otros" element={<BebidasYOtros />} />
      <Route path="/domingo" element={<Domingo />} />
      <Route path="/lunes" element={<Lunes />} />
      <Route path="/martes" element={<Martes />} />
      <Route path="/miercoles" element={<Miercoles />} />
      <Route path="/jueves" element={<Jueves />} />
      <Route path="/viernes" element={<Viernes />} />
      <Route path="/sabado" element={<Sabado />} />
    </Routes>
  );
}

export default App;