import React, {useState} from 'react'
import './itemCount.scss';
import '../Boton/Boton.scss';


function ItemCount({initial, stock}) {
    const [count, setCount] = useState (initial)

    function agregar(){
        if(count < stock){
            setCount(count+1)
        }
    }
    function restar(){
        if(count > 0){
            setCount(count-1)
        }
    }

    function onAddToCart(){
        // alert(`agregado al carrito `)
    }

  return (
    <div>
        <p>stock: <span>{stock - count}</span></p>
    
        <div className='btnMasMenos'>
            <button disabled={count <= 0} className='btnMenos' onClick={restar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} className='btnMas'  onClick={agregar} >+</button>
            
        </div>
        <button disabled={count <= 0} onClick={onAddToCart} className="btnAgregar">agregar Carrito</button>
        <button className='btn'>Comprar</button>
           </div>
  )
}

export default ItemCount

