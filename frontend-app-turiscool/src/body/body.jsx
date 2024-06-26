import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import FormularioSatisfaccion from '../educacion/formulario-satisfaccion/formulario-satisfaccion';

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<FormularioSatisfaccion />} />
    </Routes>
  );
}

export default Body;
