import React, {useContext} from 'react'
import './favorito.scss';
import { favContext } from '../../Context/favContext';
import '../Carrito/carrito.scss'
import '../Productos/card.scss'
import { FaHeart } from 'react-icons/fa';
import FormatPrice from '../Productos/Precio'
import '../Productos/ItemListContainer2.scss'
import'../Productos/card.scss'

export default function Favorito() {
const {fav,borrarFav} = useContext(favContext)

  return (
    <>
    <div>
          <div className='carrito'>
            <h1>Favorito</h1>
          </div>
      {
          (fav.length === 0) ?
            (
              <div className="carrito carrito__fav">
                  <div className='carrito__text'>favorito Vacio</div>
              </div>
            )
            :
            (
              <section className="contenContainer__juegos">
                {fav.map((data) => (
                  <div key={data.id} className='favorito__cont'>
                   <div>
                      <img src={data.img} alt={data.titulo} className="card__img"></img>
                      <h2 >{data.titulo}</h2>
                      <p >{FormatPrice(data.precio)}</p>
                   </div>
                    <div >
                       <button className='btn favorito__btn' onClick={() => {borrarFav(data.id)}} style={{width: "110px",display:"flex",gap:"8px",alignItems:"center", padding: "9px 12px"}}>
                       Eliminar <FaHeart/></button>
                    </div>
                </div>
                ))}
              </section>
 
            )
        }
        
      </div>
    </>
  )
}


