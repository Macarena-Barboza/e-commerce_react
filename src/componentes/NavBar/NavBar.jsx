import React from 'react'
import './NavBar.css';

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
            </ul>
        </div>
        <div className='Usuario'>usuario</div>
    </header>
  )
}

export default NavBar