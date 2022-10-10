import React, {useState, useContext} from 'react'
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import Boton from '../Boton/Boton';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import { favContext } from '../../Context/favContext';
import { toast } from "react-toastify";
import FormatPrice from '../Productos/Precio'

function ItemDetail({data}) {
const[quitarCount , setQuitarCount]= useState(false)
const {addItem} = useContext(cartContext)
const {addFav} = useContext(favContext)

function onAdd(count){
      addItem(data, count)
            toast(`Agregaste ${count} unidad al Carrito! `,{autoClose: 1300,theme: "colored", hideProgressBar: true, style: {
                  background: "linear-gradient(19deg, #97fbc9 0%, #dbafe7 100%)",
                  borderRadius:"7px",
                  fontWeight:"600",
                  top: "50px",
                  color:"#fff",
                  textShadow:"1px 1px 2px rgba(0,0,0,0.386)"
                }})
            setQuitarCount(true)
      }
function onAddFav(){
      addFav(data)
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
                        <p className='producto__text__precio'>{FormatPrice(data.precio)}</p>
                         <button className='producto__text__ico' onClick={onAddFav}><FaHeart/></button>
                  </div>

                  { data.stock === 0 && <span style={{color: "#ff0000"}}> Producto sin Stock </span>}

                  { quitarCount ? <><Link to='/carrito' ><Boton text='Ir al Carrito'></Boton></Link> <Link to="/">
                          <Boton text='Seguir Comprando'></Boton>
                        </Link></>   : <ItemCount initial= {0} stock={data.stock} onAddToCart={onAdd} />}
            </div>
      </div>
  )
}

export default ItemDetail