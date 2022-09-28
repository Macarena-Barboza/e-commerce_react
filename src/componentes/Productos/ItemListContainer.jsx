import { useState, useEffect  } from 'react';
import Card from './Card';
import './card.scss';
import getItems,{getItemsCategoria} from '../../services/mockAPI';
import {useParams} from 'react-router-dom';


function ItemListContainer({greeting}) {
  let [data, setData]= useState([]);

  const {categoria} = useParams();

  useEffect(()=>{
    if (categoria === undefined){
      getItems().then((repuestaDatos) => setData(repuestaDatos));
    }else{
      getItemsCategoria(categoria).then((repuestaDatos) => setData(repuestaDatos));
    }
  }, [categoria]);

  return (
    <div>
        <h1>{greeting}</h1>
        <section>
              {data.map((item) => {
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
                })}
        </section>
    </div>
  );
}

export default ItemListContainer