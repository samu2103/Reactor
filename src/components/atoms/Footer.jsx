import '../../assets/styles/footer.css'

function Footer() {
    return (  
        <footer>
      <div className="description">
        <p>Contacto - 9651062634</p>
      </div>
      <h1>AFRCLEAN </h1>
      <div className="description">
        <p>Direccion - Universidad politecnica de Chiapas</p>
      </div>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
   
    );
}

export default Footer;