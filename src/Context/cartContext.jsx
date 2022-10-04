import React, {useState, createContext } from 'react'

const cartContext= createContext();

export default function CartContextProvider({children}) {

      const [cart, setCart] = useState ([])

      function addItem(item, count){
            if(isInCart(item.id)){
                  let newCart = cart.map((itemMapeo) => {
                        if(itemMapeo.id === item.id){
                              itemMapeo.count += count
                              return itemMapeo
                        }else return itemMapeo
                  });
                  setCart(newCart)
            }else{
                  let newCart = cart.map ((item) => item)
                  newCart.push({...item, count:count})
                  setCart(newCart)
            }
      }
      function isInCart(id){
            let found = cart.some((item) => item.id === id)
            return found;
      }
 
      function getTotalItemInCart(){
            return cart.reduce((acc, item) => acc += item.count, 0)
      }

      function removeProduct(id){
            setCart(cart.filter(item => item.id !== id))
      }

      function clearCart(){
          return  setCart([])
      }

      function deleteItem(id){
            return setCart(cart.filter(item => item.id !==id))
      }

function getTotalItemPriceInCart(){
      return cart.reduce((acc, item) => acc += item.precio * item.count, 0)
}

return (
      <cartContext.Provider value={{cart, addItem, isInCart, getTotalItemInCart, removeProduct, deleteItem, clearCart, getTotalItemPriceInCart}}>{children}</cartContext.Provider>
      )
}
export {cartContext};
