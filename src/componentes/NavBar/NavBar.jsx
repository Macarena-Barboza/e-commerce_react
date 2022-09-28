import './NavBar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FaChess,FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <header className='navbar'>
      <Link to='/'>
        <div className='Logo'> <FaChess/>  Super Games</div>
      </Link>
        <div>
            <ul className='navbar__item'>
                <li><Link to='/' >Inicio</Link></li>
                {/* <li><Link to='/'>Juegos</Link></li> */}
                <li><Link to='/categoria/fantasia'>Fantasia</Link></li>
                <li><Link to='/categoria/accion'>Acción</Link></li>
                <li><Link to='/categoria/deporte'>Deportes</Link></li>
                <li><Link to='/accesorios'>Accesorios</Link></li>
            </ul>
        </div>
        <div className='navbar__iconos'>      
          <Link to='/usuario'><FaUserCircle/></Link>
          <Link to='/carrito'><FontAwesomeIcon icon={faCartShopping}/></Link>
        </div>
    </header>
  )
}

export default NavBar