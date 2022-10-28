import React, {useState} from 'react'
import './itemCount.scss';
import '../Boton/Boton.scss';
import'../ItemDetail/ItemDetail.scss';

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
    let handleStock = stock - count


  return (
    <div>
        {
            (handleStock) ? <p className='producto__stock'>stock: {handleStock }</p> : (handleStock === 0 && <p className='producto__stock__sin' >  sin stock </p>)
        }

        <div className="btns">
            <div className='btnMasMenos'>
                <button disabled={count <= 1} className='btnMenos' onClick={handleRestar}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock} className='btnMas'  onClick={handleSumar} >+</button>
            
            </div>
                <button disabled={count <= 0} onClick={() => onAddToCart(count)} className='btnAgregar'>agregar carrito</button>
            </div>
        </div>
  )
}

export default ItemCount

