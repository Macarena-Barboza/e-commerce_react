import './NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <header className='navbar'>
        <div className='Logo'>Super Games</div>
        <div>
            <ul className='item'>
                <li><a href="# ">Fantasia</a></li>
                <li><a href="# ">Acción</a></li>
                <li><a href="# ">Deportes</a></li>
                <li><a href='# '>Todos</a></li>
                <li><a href='# '>Accesorios</a></li>
            </ul>
        </div>
        <div className='iconos'>      
          <a a href="# "> <FontAwesomeIcon icon={faUser}/></a>
          <a a href="# "><FontAwesomeIcon icon={faCartShopping} /></a>
        </div>
    </header>
  )
}

export default NavBar