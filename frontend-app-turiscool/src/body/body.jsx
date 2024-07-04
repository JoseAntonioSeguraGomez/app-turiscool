import { Routes, Route } from 'react-router-dom';
import FormularioSatisfaccion from '../educacion/formulario-satisfaccion/formulario-satisfaccion';
import MediaCursos from '../educacion/componentes/mediaCursos';
import Menu from '../menu/menu';

const Body = () => {
  return (
    <Routes>
      <Route path="/*"/>
      <Route path="/" element={<Menu />}/>
      <Route path="/average" element={<MediaCursos />} />
    </Routes>
  );
}

export default Body;
