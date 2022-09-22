import React from 'react'
import './ItemDetail.scss';


function ItemDetail({data}) {
  return (
      <div className='producto'>
            <div className='producto__img'>
                  <img  src={data.img} alt={data.titulo} />
            </div>
            <div className='producto__text'>
                  <h1 className='producto__text__titulo'>{data.titulo}</h1> 
                  <p className='producto__text__descrip'>{data.descripcion}</p>
                  <p className='producto__text__descrip'> stock: {data.stock}</p>
                  <p className='producto__text__precio'>$ {data.precio}</p>
                  <button>Agregar Carrito </button>
                  <button>Comprar</button>
            </div>
      </div>
  )
}

export default ItemDetail;