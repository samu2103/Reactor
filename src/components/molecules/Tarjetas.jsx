import  '../../assets/styles/tarjetas.css'
import sam from '../../assets/images/sam.png'
import nacho from '../../assets/images/nacho.png'
import keny from '../../assets/images/keny.png'



const Card = ({ name, imageUrl, jsxLink, cssLink }) => {
  return (
    <div className="custom-card"> {/* Cambié la clase a "custom-card" */}
      <img src={imageUrl} alt={`Profile of ${name}`} className="custom-profile-pic" /> {/* Cambié la clase a "custom-profile-pic" */}
      <h2>{name}</h2>
      <div className="custom-links"> {/* Cambié la clase a "custom-links" */}
        <a href={jsxLink} target="_blank" rel="noopener noreferrer">JSX Reference</a>
        <a href={cssLink} target="_blank" rel="noopener noreferrer">CSS Reference</a>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="custom-card-container"> {/* Cambié la clase a "custom-card-container" */}
      <Card 
        name="Jesus Ignacio Velázquez Hernández"
        imageUrl={nacho}
        jsxLink="https://jsx-reference.com"
        cssLink="https://css-reference.com"
      />
      <Card 
        name="Jorge Alexis Arredondo Juárez"
        imageUrl={keny}
        jsxLink="https://jsx-reference.com"
        cssLink="https://css-reference.com"
      />
      <Card 
        name="Samuel Alberto Escobar Hernandez"
        imageUrl={sam}
        jsxLink="https://jsx-reference.com"
        cssLink="https://css-reference.com"
      />
    </div>
  );
}

export default App;
