import React, { useState, useEffect  } from 'react';
import ItemList from './ItemList'
import getItems,{getItemsCategoria} from '../../services/mockAPI';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


function ItemListContainer({greeting}) {
  let [data, setData]= useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const {categoria} = useParams();

  useEffect(()=>{
    if (categoria === undefined){
      getItems().then((repuestaDatos) => setData(repuestaDatos));
    }else{
      getItemsCategoria(categoria).then((repuestaDatos) => setData(repuestaDatos));
    }
  }, [categoria]);

  return (
    <>
    { loading ? <CircularProgress className='loader'/>   : 
    (<div className='conten' >
      <h1>{greeting}</h1>
      <ItemList data={data}/>
    </div>) }
    </>
  );
}

export default ItemListContainer
