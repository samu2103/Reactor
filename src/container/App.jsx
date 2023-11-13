import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../pages/landingpage.jsx';
import Acerca from '../pages/acerca.jsx'; // Asegúrate de crear este componente
import Contacto from '../pages/contacto.jsx'; // Asegúrate de crear este componente
import InicioSesion from '../pages/InicioSesion.jsx'; // Asegúrate de crear este componente
import Registro from '../pages/Resgistro.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
