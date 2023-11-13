import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/styles/header.css";
import logo from "../../assets/images/fotologo.png";

function Header() {
  return (
    <header>
      <div className="fondocolor">
        <ul className="letrasheader">
          <img className="lf1" src={logo} alt="" />
          <li><Link className="c1" to="/">Inicio</Link></li>
          <li><Link className="c1" to="/acerca">Acerca de nosotros</Link></li>
          <li><Link className="c1" to="/contacto">Graficas</Link></li>
          <li><Link className="c1" to="/iniciosesion">Inicio de sesion</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
