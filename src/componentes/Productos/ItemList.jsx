import React from 'react'
import Card from './Card'
import './card.scss';


function ItemList(props) {

  return (
      <section>
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
  )
}

export default ItemList