import React, {useState} from 'react'
import './itemCount.scss';
import '../Boton/Boton.scss';


function ItemCount({initial, stock, onAddToCart}) {
    const [count, setCount] = useState (initial)

    function handleSumar(){
        if(count < stock){
            setCount(count+1)
        }
    }
    function handleRestar(){
        if(count > 0){
            setCount(count-1)
        }
    }


  return (
    <div>
  
         <p>stock: <span>{stock - count}</span></p>

        <div className='btnMasMenos'>
            <button disabled={count <= 0} className='btnMenos' onClick={handleRestar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} className='btnMas'  onClick={handleSumar} >+</button>
            
        </div>
            <button disabled={count <= 0} onClick={() => onAddToCart(count)} className='btnAgregar'>agregar carrito </button>
        </div>
  )
}

export default ItemCount

