import '../../assets/styles/ReactorBeach.css'
import reactor from "../../assets/images/reactor1.png"

function ReactorBeach() {
  return (
    <div>
      <div className="containerReactor">
        <h1 className="txt-reactor">REACTOR BEACH</h1>
        <div className="content-reactor">
          <div className="image-reactor">
            <img src={reactor} alt="Imagen" />
          </div>
          <div className="description-reactor">
            <p>Un biorreactor es un dispositivo diseñado para mantener
                 un ambiente
                 biológicamente activo, permitiendo el crecimiento
             y la transformación 
                 de masa biológica mediante 
                 la utilización o descomposición de materiales 
                 introducidos en el reactor. </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ReactorBeach;
