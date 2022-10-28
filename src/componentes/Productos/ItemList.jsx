import React from 'react'
import Card from './Card'
import './card.scss';
import Filtro from './Filtro';
import './ItemListContainer2.scss'

function ItemList(props) {

  return (
    <div className='contenContainer'>
        <div className='contenContainer__filt'>
           <Filtro/>
        </div>
      <section className="contenContainer__juegos">
            {props.data.map((item) => {
               return(
                 <Card
                   key={item.id}
                   id={item.id}
                   precio={item.precio}
                   titulo={item.titulo}
                   img={item.img}
                   descripcion={item.descripcion}
                   stock={item.stock}
                   reseña={item.reseña}
                 />
                    );
               })
            }
      </section>
  </div>

  )
}

export default ItemList