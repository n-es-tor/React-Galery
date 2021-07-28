import React from 'react'
import { Link } from "react-router-dom";
import Azucar3 from '../images/azucar.jpg';
import Brujo3 from '../images/brujo.jpg';
import Ciencia3 from '../images/ciencia.jpg';
import Devil3 from '../images/devil.jpg';
import Gato3 from '../images/gato.jpg';
import Pato3 from '../images/pato.jpg';


const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to="/Azucar" className="links">
                <figure>
                    <img src={Azucar3} alt="" className="tamaño-img" />
                    <figcaption>Azucar</figcaption>
                </figure>
            </Link>
            <Link to="/Brujo" className="links">
                <figure>
                    <img src={Brujo3} alt="" className="tamaño-img" />
                    <figcaption>Brujo</figcaption>
                </figure>
            </Link>
            <Link to="/Ciencia" className="links">
                <figure>
                    <img src={Ciencia3} alt="" className="tamaño-img" />
                    <figcaption>Ciencia</figcaption>
                </figure>
            </Link>
            <Link to="/Devil" className="links">
                <figure>
                    <img src={Devil3} alt="" className="tamaño-img" />
                    <figcaption>Devil</figcaption>
                </figure>
            </Link>
            <Link to="/Gato" className="links">
                <figure>
                    <img src={Gato3} alt="" className="tamaño-img" />
                    <figcaption>Gato</figcaption>
                </figure>
            </Link>
            <Link to="Pato" className="links">
                <figure>
                    <img src={Pato3} alt="" className="tamaño-img" />
                    <figcaption>Pato</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
