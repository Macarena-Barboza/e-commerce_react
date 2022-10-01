import React, {useState} from 'react'
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import Boton from '../Boton/Boton';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";


function ItemDetail({data}) {
const[quitarCount , setQuitarCount]= useState(false)

      function onAdd(count){
            toast(`Agregaste ${count} unidad al Carrito! `,{autoClose: 2000,theme: "colored", hideProgressBar: true, style: {
                  background: "linear-gradient(19deg, #97fbc9 0%, #dbafe7 100%)",
                  borderRadius:"7px",
                  fontWeight:"600",
                  top: "50px",
                  color:"#fff",
                  textShadow:"1px 1px 2px rgba(0,0,0,0.386)"
                }})
            setQuitarCount(true)
      }

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
                  { quitarCount ? <Link to='/Carrito' ><Boton text='Finalizar Compra'></Boton></Link> : <ItemCount initial= {0} stock={data.stock} onAddToCart={onAdd} />}
     
            </div>
      </div>
  )
}

export default ItemDetail;