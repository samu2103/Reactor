import Landing from "../components/organism/landing";
import Body from "../components/molecules/Body";
import ReactorBeach from "../components/molecules/ReactorBeach";
import Sensores from "../components/molecules/Sensores";
import Tarjetas from "../components/molecules/Tarjetas"
import Footer  from "../components/atoms/Footer";




function landingpage() {
  return (
    <>
      <Landing />
      <Body />
      <ReactorBeach />
      <Sensores />
      <Tarjetas />
      <Footer />
      
     
  
    </>
  );
}

export default landingpage;
