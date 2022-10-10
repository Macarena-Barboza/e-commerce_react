import './CartWidget.scss';
import { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Carrito() {
  const {getTotalItemInCart} = useContext(cartContext)

  return (
    <div className='carrito__ico'>
      <span><FontAwesomeIcon icon={faCartShopping}/>{getTotalItemInCart() > 0 && getTotalItemInCart()}</span>
    </div>
  )
}

export default Carrito
