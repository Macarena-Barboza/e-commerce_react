import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";
import '../Productos/ItemListContainer2.scss';

export default function Filtro() {
    return (
        <div>
            <h1>Filtro</h1>
            <div className="contenContainer__filt__gen">
                <Buscador />
            </div>

            <h3>Plataformas:</h3>
            <ul className='contenContainer__filt__gen'>
                <li>
                    <Link to="/plataforma/pc">PC</Link>
                </li>
                <li>
                    <Link to="/plataforma/ps4">PS4</Link>
                </li>
                <li>
                    <Link to="/plataforma/xbox">Xbox</Link>
                </li>
                <li>
                    <Link to="/plataforma/ps5">PS5</Link>
                </li>
            </ul>


            <h3>Genero:</h3>
            <ul className='contenContainer__filt__gen'>
                <li>
                    <Link to="/categoria/fantasia">Fantasia</Link>
                </li>
                <li>
                    <Link to="/categoria/accion">Acción</Link>
                </li>
                <li>
                    <Link to="/categoria/aventura">Aventura</Link>
                </li>
                <li>
                    <Link to="/categoria/carrera">Carrera</Link>
                </li>
                <li>
                    <Link to="/categoria/deporte">Deporte</Link>
                </li>
                <li>
                    <Link to="/categoria/terror">Terror</Link>
                </li>
                <li>
                    <Link to="/categoria/disparo">Disparo</Link>
                </li>
                <li className='gen-li'>
                    <Link to="/productos">Todos</Link>
                </li>
            </ul>
        </div>
    );
}
