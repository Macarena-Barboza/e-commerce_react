import React, { useContext } from "react";
import "./favorito.scss";
import { favContext } from "../../Context/favContext";
// import { cartContext } from "../../Context/cartContext";

import "../Carrito/carrito.scss";
import "../Productos/card.scss";
import { FaHeart } from "react-icons/fa";
import FormatPrice from "../Productos/Precio";

export default function Favorito() {
    // const { addItem } = useContext(cartContext);
    const { fav, borrarFav } = useContext(favContext);

    return (
        <>
            <div>
                <div className="favorito">Favorito</div>
                {fav.length === 0 ? (
                    <div className="carrito__text">
                        <div>favorito Vacio</div>
                    </div>
                ) : (
                    <section>
                        {fav.map((data) => (
                            <div key={data.id}>
                                <div>
                                    <img src={data.img} alt={data.titulo}></img>
                                    <p>{data.titulo}</p>
                                    <p>{FormatPrice(data.precio)}</p>
                                    <p>{data.cantidad}</p>
                                </div>
                                <div>
                                    {/* <button onClick={addItem}> agregar Carrito</button> */}
                                    <button
                                        onClick={() => {
                                            borrarFav(data.id);
                                        }}
                                    >
                                        Eliminar <FaHeart />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </>
    );
}
