import React, { useState, useEffect  } from 'react';
import ItemList from './ItemList'
import { getItems, getItemsCategoria, getItemsPlataforma} from '../../services/firestore';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import './ItemListContainer2.scss'


function ItemListContainer() {
  let [data, setData]= useState([]);

  const [loading, setLoading] = useState(false);

  const {categoria, plataforma} = useParams();

  useEffect(()=>{
    setLoading(true);
    if (categoria === undefined){
      getItems().then((repuestaDatos) => setData(repuestaDatos))
      .finally(() => setLoading(false));
    }else{
      getItemsCategoria(categoria).then((repuestaDatos) => setData(repuestaDatos))
      .finally(() => setLoading(false));
    }
  }, [categoria]);


// _______________ Plataforma ____________________________-

useEffect(()=>{
  setLoading(true);
  if (plataforma === undefined){
    getItems().then((repuestaDatos) => setData(repuestaDatos))
    .finally(() => setLoading(false));
  }else{
    getItemsPlataforma(plataforma).then((repuestaDatos) => setData(repuestaDatos))
    .finally(() => setLoading(false));
  }
}, [plataforma]);

  return (
    <>
    { loading ? 
    <CircularProgress className='loader'/>   
    : 
    (<div className='contenContainer' >
      <section >
            <ItemList data={data} />
      </section>
    </div>) }
    </>
  );
}

export default ItemListContainer
