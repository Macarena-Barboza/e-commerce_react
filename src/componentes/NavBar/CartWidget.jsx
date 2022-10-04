import './CartWidget.scss';
import { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Carrito() {
  const {getTotalItemInCart} = useContext(cartContext)

  return (
    <div className='carrito'>
      <Link to='/carrito'><span><FontAwesomeIcon icon={faCartShopping}/>{getTotalItemInCart()}</span></Link>
    </div>
  )
}

export default Carrito
