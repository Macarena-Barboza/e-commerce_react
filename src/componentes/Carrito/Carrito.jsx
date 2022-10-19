import "./carrito.scss";
import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormatPrice from "../Productos/Precio.js";

function Carrito() {
    const { cart, clearCart, deleteItem, getTotalItemPriceInCart } =
        useContext(cartContext);

    return (
        <div className="carrito">
            <h3>Carrito:</h3>
            <div>
                {cart.length === 0 ? (
                    <div className="carrito__text">
                        <div>Carrito Vacio</div>
                        <Link to="/" className="carrito__btn__link">
                            <button className="carrito__btn">
                                Ir a la Tienda
                            </button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="carrito__content__2--titl">
                            <p>juego </p>
                            <p>precio </p>
                            <p>cantidad </p>
                            <p>subtotal </p>
                        </div>
                        <div className="carrito__content">
                            {cart.map((data) => (
                                <div key={data.id}>
                                    <div className="carrito__content__2">
                                        <img src={data.img}  alt=""  className="carrito__content__img"/>
                                        <h3 className="carrito__content__titu"> {data.titulo}</h3>
                                        <p className="carrito__content__titu"> {FormatPrice(data.precio)} </p>
                                        <p className="carrito__content__titu"> {data.count}</p>
                                        <p className="carrito__content__titu">{FormatPrice( data.precio * data.count )}</p>
                                        <button className="carrito__content__btn" onClick={() => deleteItem(data.id)}> <FaTrash /> </button>
                                    </div>
                                </div>
                            ))}
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
                        </div>
                        <Link to="/checkoutForm">
                            <button className="carrito__btn">  Finalizar Compra</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Carrito;
