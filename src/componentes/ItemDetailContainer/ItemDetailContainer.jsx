import React, {useEffect, useState} from 'react'
import {getSingleItems}from '../../services/mockAPI';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
      let [data, setData]= useState({});

      const {id} = useParams();

      useEffect(()=>{
        getSingleItems(id).then((repuestaDatos) => setData(repuestaDatos));
      }, [id]);

  return (
      <ItemDetail data = {data}/>
  );
}
 
export default ItemDetailContainer