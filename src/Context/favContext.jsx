import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

const favContext = createContext();

export default function FavContextProvider({ children }) {
    <div>favContext</div>;
    const [fav, setFav] = useState([]);

    const addFav = (item) => {
        const newFav = fav.findIndex((i) => i.id === item.id);

        if (newFav > -1) {
            setFav([...fav]);
        } else {
            setFav([...fav, item]);
        }
        toast(`Agregaste a Favorito! `, {
            autoClose: 1300,
            theme: "colored",
            hideProgressBar: true,
            style: {
                background: "linear-gradient(19deg, #5ce7ff 0%, #bf61d9 100%)",
                borderRadius: "7px",
                fontWeight: "600",
                top: "50px",
                color: "#fff",
                textShadow: "1px 1px 2px rgba(0,0,0,0.386)",
                boxShadow: "0px 0px 10px 1px #75e9f6",
            },
        });
    };

    const borrarFav = (id) => {
        setFav(fav.filter((i) => i.id !== id));
    };

    return (
        <favContext.Provider value={{ fav, addFav, borrarFav }}>
            {children}
        </favContext.Provider>
    );
}
export { favContext };
