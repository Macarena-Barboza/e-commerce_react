import "./carrito.scss";
import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import FormatPrice from "../Productos/Precio.js";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Carrito() {
    const { cart, clearCart, deleteItem, getTotalItemPriceInCart } =
        useContext(cartContext);

    return (
        <div className="carrito">
            <h1>Carrito:</h1>
            <div>
                {cart.length === 0 ? (
                    <div className="carrito__text">
                        <div>Carrito Vacio</div>
                        <Link to="/" className="carrito__btn__link">
                            <button className="carrito__btn"> Ir a la Tienda</button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="carrito__content__2--titl">
                            <div className="carrito__content__2--titl__text">
                                <p className="p">  </p>
                                <p>juego </p>
                                <p>precio </p>
                                <p>cantidad </p>
                                <p>subtotal </p>
                            </div>
                        </div>
                        <div className="carrito__cont">
                            <div className="carrito__content">
                                 {cart.map((data) => (
                                    <div key={data.id} className="carrito__content__2">
                                        <img src={data.img}  alt=""  className="carrito__content__img"/>
                                        <div className="carrito__content__text">
                                            <h3 className="carrito__content__titu"> {data.titulo}</h3>
                                            <p className="carrito__content__titu precio"> {FormatPrice(data.precio)} </p>
                                            <p className="carrito__content__titu "> {data.count}</p>
                                            <p className="carrito__content__titu">{FormatPrice( data.precio * data.count )}</p>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                               <IconButton aria-label="delete" size="small"  >
                                                 <div className="carrito__content__btn">
                                                     <DeleteIcon fontSize="inherit" onClick={() => deleteItem(data.id)}  />
                                                 </div>
                                               </IconButton>
                                             </Stack>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="carrito__total">
                            <button className="carrito__btn" onClick={clearCart} > Vaciar Carrito</button>
                            <div>
                                <p>TOTAL: {FormatPrice(getTotalItemPriceInCart())}</p>
                            </div>
                        </div>
                        <div className="carrito__total">
                            <Link to="/" className="carrito__btn__link">
                                <button className="carrito__btn"> Seguir Comprando </button>
                            </Link>
                            <Link to="/checkoutForm">
                                <button className="carrito__btn">  Finalizar Compra</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Carrito;
