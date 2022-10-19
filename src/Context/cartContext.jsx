import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(data, count) {
        if (isInCart(data.id)) {
            let newCart = cart.map((dataMapeo) => {
                if (dataMapeo.id === data.id) {
                    dataMapeo.count += count;
                    return dataMapeo;
                } else return dataMapeo;
            });
            setCart(newCart);
        } else {
            let newCart = cart.map((data) => data);
            newCart.push({ ...data, count: count });
            setCart(newCart);
        }
    }

    function isInCart(id) {
        let found = cart.some((item) => item.id === id);
        return found;
    }

    function getTotalItemInCart() {
        return cart.reduce((acc, item) => (acc += item.count), 0);
    }

    function deleteItem(id) {
        return setCart(cart.filter((item) => item.id !== id));
    }

    function getTotalItemPriceInCart() {
        return cart.reduce((acc, item) => (acc += item.precio * item.count), 0);
    }

    function clearCart() {
        return setCart([]);
    }

    return (
        <cartContext.Provider
            value={{ cart, addItem, isInCart, getTotalItemInCart, deleteItem, clearCart, getTotalItemPriceInCart,}}> {children}
        </cartContext.Provider>
    );
}
export { cartContext };
