import '../assets/styles/registro.css'

function Registro() {
    return ( 
        <div className="registro-container">
        <h2>Registro</h2>
        <form className="registro-form">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
  
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
  
          <button className="registro-button" >
            Registrarse
          </button>
        </form>
      </div>
     );
}

export default Registro;