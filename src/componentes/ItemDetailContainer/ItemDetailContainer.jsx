import React, {useEffect, useState} from 'react'
import {getSingleItems}from '../../services/mockAPI';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import './itemDetailContainer.scss';


function ItemDetailContainer() {
      let [data, setData]= useState({});
      let [error, setError]= useState(false);
      let [loading, setLoading]= useState(true);

      const {id} = useParams();

      useEffect(()=>{
        getSingleItems(id)
        .then((repuestaDatos) => setData(repuestaDatos))
        .catch((errormsg) => {
           setError(errormsg.message);
        })
        .finally(()=> setLoading(false));
      }, [id]);

if(loading){
  return (
    <>
        {error ? 
          (<div> 
              <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2> 
              <p>{error}</p>
          </div>) :(<CircularProgress className='loader'/> 
        )}
    </>
  )
}

  return (
      <ItemDetail data = {data}/>
  );
}
 
export default ItemDetailContainer