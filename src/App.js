import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Pato from "./components/Pato";
import Azucar from "./components/Azucar";
import Brujo from "./components/Brujo";
import Ciencia from "./components/Ciencia";
import Devil from "./components/Devil";
import Gato from "./components/Gato";
import Navegacion from "./components/Navegacion";

function App() {
  return (
   
    <Router>
      
      <div className="container">
        <h1 className="text-center mt-3 mb-3" >Galeria</h1>
      </div>

      <Route path="/Azucar" component={Azucar}/>
      <Route path="/Brujo" component={Brujo}/>
      <Route path="/Ciencia" component={Ciencia}/>
      <Route path="/Devil" component={Devil}/>
      <Route path="/Gato" component={Gato}/>
      <Route path="/Pato" component={Pato}/>

      <Navegacion></Navegacion>

    </Router>

  );
}

export default App;
