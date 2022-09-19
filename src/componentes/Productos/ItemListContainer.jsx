import { useState, useEffect  } from 'react';
import Card from './Card';
import './card.scss';
import getItems from '../../services/mockAPI';

function ItemListContainer({greeting}) {
  let [data, setData]= useState([]);

  useEffect(()=>{
    getItems().then((repuestaDatos) => setData(repuestaDatos));
  }, []);

  return (
    <div>
        <h1>{greeting}</h1>
        <section>
              {data.map((item) => {
                  return(
                    <Card
                      key={item.id}
                      precio={item.precio}
                      titulo={item.titulo}
                      img={item.img}
                      descripcion={item.descripcion}
                      stock={item.stock}
                    />
                  );
                })}
        </section>
    </div>
  );
}

export default ItemListContainer