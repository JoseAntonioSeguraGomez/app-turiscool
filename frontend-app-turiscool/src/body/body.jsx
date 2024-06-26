import { Routes, Route } from 'react-router-dom';
import FormularioSatisfaccion from '../educacion/formulario-satisfaccion/formulario-satisfaccion';
import Menu from '../menu/menu';

const Body = () => {
  return (
    <Routes>
      <Route path="/*"/>
      <Route path="/" element={<Menu />}/>
      <Route path="/average" element={<FormularioSatisfaccion />} />
    </Routes>
  );
}

export default Body;
