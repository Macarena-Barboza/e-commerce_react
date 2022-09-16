import React, {useState} from 'react'
import './itemCount.css';
import '../Boton/boton.css';


function ItemCount({initial=1, stock}) {
    const [count, setCount] = useState (initial)
    const [agregarCarrito, setAgregarCarrito] = useState(stock)

    function agregar(){
        if(count < stock){
            setCount(count+1)
            setAgregarCarrito(agregarCarrito-1)
        }else {
        //    alert("Alcanzó al máximo del Stock")
           setAgregarCarrito(0)
        }
    }
    function restar(){
        if(count > 1){
            setCount(count-1)
            setAgregarCarrito(agregarCarrito+1)
        }
    }

    function onAddToCart(){
        alert(`agregado al carrito `)
    }

  return (
    <>
    <p>stock: <span>{agregarCarrito}</span></p>

    <div className='btnMasMenos'>
        <button className='btnMenos' onClick={restar}>-</button>
        <span>{count}</span>
        <button className='btnMas'onClick={agregar} >+</button>
    </div>
    <button onClick={onAddToCart}>agregar carrito </button>
    </>
  )
}

export default ItemCount


