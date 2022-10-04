import './carrito.scss';
import { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Carrito() {
  const {getTotalItemInCart, clearCart} = useContext(cartContext)

  return (
    <div className='carritos'>
      <h3 className='carrito__titulo'>Carrito de Compras:</h3>
  
       <span><FontAwesomeIcon icon={faCartShopping}/></span>
        <span>{getTotalItemInCart()}</span>
        


        <div><button className='carritos__btn' onClick={clearCart}>Vaciar Carrito</button></div>
    </div>
  )
}

export default Carrito
