import React, {useEffect, useState} from 'react'
import {getSingleItems}from '../../services/mockAPI';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
      let [data, setData]= useState({});

      useEffect(()=>{
        getSingleItems(2).then((repuestaDatos) => setData(repuestaDatos));
      }, []);
  return (
      <ItemDetail data = {data}/>
  );
}
 
export default ItemDetailContainer