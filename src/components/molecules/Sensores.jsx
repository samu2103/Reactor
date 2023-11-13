import '../../assets/styles/sensores.css'
import seph from "../../assets/images/seph.png"
import secon from "../../assets/images/secon.png"
import mq06 from "../../assets/images/mq106.png"
import mq35 from "../../assets/images/mq35.png"

function Sensores () {
    return(

    <div>
 <h1 className="txt-sensores">Sensores</h1>
 <div className="card-container">
      <div className="card">
        <div className="card-content">
          <img src={seph} alt="Sensor de PH" />
          <div className="overlay">
            <h2>Sensor de PH</h2>
            <p>Permiten medir y controlar el pH de una solución de manera automatizada</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <img src={mq35} alt="Sensor de conductividad" />
          <div className="overlay">
            <h2>Sensor conductividad</h2>
            <p>Indica cuántos miligramos de sólidos solubles se disolvieron en un litro de agua.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <img src={secon} alt="Sensor de MQ35" />
          <div className="overlay">
            <h2>Sensor de MQ35</h2>
            <p>El sensor MQ-2 detecta gases peligrosos mediante cambios en su resistencia eléctrica.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <img src={mq06} alt="Sensor de MQ6" />
          <div className="overlay">
            <h2>Sensor de MQ6</h2>
            <p>El sensor MQ-2 detecta gases peligrosos mediante cambios en su resistencia eléctrica.</p>
          </div>
        </div>
      </div>
    </div>

    

 

        </div>
     
    ); 
}

export default Sensores;