import React, { useState } from 'react'
import './NavBar.scss';
import { FaChess,FaUserCircle,FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import BurguerButton from './Burguer';

function NavBar() {
  const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      setClicked(!clicked)
    }
  return (
    <header className='navbar'>
      <div className='burguer' >
           <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <Link to='/'>
        <div className='Logo'> <FaChess/>  Super Gaming</div>
      </Link>
            <ul className={`links ${clicked ? 'active' : ''}`}>
                <li><Link to='/' >Inicio</Link></li>
                <li><Link to="/productos" >Juegos</Link></li>
                <li> <Link to="/novedades" >Novedades</Link></li>
            </ul>
        <div className='navbar__iconos'>      
            <Link to='/favorito'  ><FaHeart/></Link>
            <Link to='/usuario' className='navbar__iconos__s'><FaUserCircle/></Link>
          <Link to='/carrito' className='navbar__iconos__c'> <CartWidget/> </Link>
        </div>
    </header>
  )
}

export default NavBar

