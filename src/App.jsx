import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dietas from "./components/Dietas.jsx";
import {Route, Routes} from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Asiatica from "./imagenes/dieta-asiatica.png"
import Sanduche from "./imagenes/dieta-sanduche.png"

function App() {

        
  return (
    <div className="App">
        
      <Home />   
      <Work />
      <Testimonial />
      <Contact />
      <p>Dietas</p>
      <Dietas 
      imagen={Asiatica}
      nombre='Ensalada asiática de quinoa y gambas'
      calorias='390'
      ingredientes= 'Quinoa 60g, gambones 150g, aguacate 1, canonigos 100g, tomate cherry 100g, zumo de lima, chile de copos 2g, salsa de soja 15ml, sirope de arce 2.5 ml'  
      />
       <Dietas 
      imagen={Sanduche}
      nombre='Tortas de Pollo'
      calorias='410'
      ingredientes= '2 tazas de pollo cocido, 1 cucharadita de chile en polvo, 2 tazas de Pico de Gallo, 4 rebanadas delgadas de cebolla blanca, ½ taza de queso Monterey'  
      />
      <Footer />

    </div>
    
  )
 
}

export default App