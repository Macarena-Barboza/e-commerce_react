import React from 'react'
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { FaHeart } from 'react-icons/fa';


function ItemDetail({data}) {
  return (
      <div className='producto'>
            <div className='producto__img'>
                  <img className='producto__images' src={data.img} alt={data.titulo} />
            </div>
            <div className='producto__text'>
                  <h1 className='producto__text__titulo'>{data.titulo}</h1> 
                  <p className='producto__text__descrip'>{data.descripcion}</p>
                  <div className='producto__text__cont'>
                        <p className='producto__text__precio'>$ {data.precio}</p>
                         <button className='producto__text__ico'><FaHeart/></button>
                  </div>
                  <ItemCount initial= {0} stock={data.stock}/>
            </div>
      </div>
  )
}

export default ItemDetail;