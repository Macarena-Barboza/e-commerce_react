import React, {useState, createContext} from 'react'
import { toast } from "react-toastify";

const favContext = createContext();

export default function FavContextProvider({children}) {
      <div>favContext</div>
      const [fav, setFav] = useState ([])

      const addFav = (item) => {
        const newFav = fav.findIndex((i) => i.id === item.id);
        console.log(newFav)

        if (newFav > -1) {
          setFav([...fav]);
        } else {
          setFav([...fav, item]);
        }
        toast(`Agregaste a Favorito! `,{autoClose: 1300,theme: "colored", hideProgressBar: true, style: {
          background: "linear-gradient(19deg, #97fbc9 0%, #dbafe7 100%)",
          borderRadius:"7px",
          fontWeight:"600",
          top: "50px",
          color:"#fff",
          textShadow:"1px 1px 2px rgba(0,0,0,0.386)"
        }})
      }

      const borrarFav = (id) => {
        setFav(fav.filter((i) => i.id !== id));
      };

  return (
      <favContext.Provider value= {{fav, addFav, borrarFav}}>{children}</favContext.Provider>
  )
}
export {favContext}
