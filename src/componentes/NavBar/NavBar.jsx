import './NavBar.scss';
import { FaChess,FaUserCircle,FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
// import Carrito from './CartWidget';

function NavBar() {
  return (
    <header className='navbar'>
      <Link to='/'>
        <div className='Logo'> <FaChess/>  Super Gaming</div>
      </Link>
        <div>
            <ul className='navbar__item'>
                <li><Link to='/' >Inicio</Link></li>
                <li><Link to='/categoria/fantasia'>Fantasia</Link></li>
                <li><Link to='/categoria/accion'>Acción</Link></li>
                <li><Link to='/categoria/deporte'>Deportes</Link></li>
                <li><Link to='/accesorios'>Accesorios</Link></li>
            </ul>
        </div>
        <div className='navbar__iconos'>      
          <Link to='/favorito'><FaHeart/></Link>
          <Link to='/usuario'><FaUserCircle/></Link>
          {/* <Link to='/carrito'> <Carrito/> </Link> */}
          <Link to='/carrito'> <CartWidget/> </Link>
        </div>
    </header>
  )
}

export default NavBar