import '../assets/styles/login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
    <h2>Iniciar Sesión</h2>
    <label htmlFor="username" className="login-label">
      Usuario:
    </label>
    <input type="text" id="username" className="login-input" />
  
    <label htmlFor="password" className="login-label">
      Contraseña:
    </label>
    <input type="password" id="password" className="login-input" />
  
    <button className="login-button">Iniciar Sesión</button>
  
    <p className="login-register-text">
      No tienes una cuenta? 
      <Link to="/Registro">
      <span className="login-register-link">Regístrate</span>
      </Link>
    </p>
  </div>
  
  );
}

export default Login;
