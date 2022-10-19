import React, {useState, useContext} from 'react';
import {cartContext} from '../../Context/cartContext';
import firestore from '../../services/firestore';
import {collection, addDoc} from 'firebase/firestore';
import {Link} from 'react-router-dom';
import './checkoutForm.scss';

function CheckoutForm() {
    const context = useContext(cartContext);
    const {cart, getTotalItemInCart, clearCart} = context;

    const [createOrder, setCreateOrder] = useState(false);

    const [dataForm, setDataForm] = useState({
        name: '',
        surname: '',
        phone: '',
        domicile: '',
        email: '',
    });

    function handleCkeckout(e) {
        e.preventDefault();
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getTotalItemInCart(),
        };
        createBuyOrder({buyer: orderData});
    }

    function inputChangeHandler(e) {
        let inputName = e.target.name;
        let value = e.target.value;

        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }
    const createBuyOrder = async (orderData) => {
        const collectionRef = collection(firestore, 'orders');
        let respuesta = await addDoc(collectionRef, orderData);
        setCreateOrder(respuesta.id);
    };

    // console.log(setCreateOrder);
    return (
        <div className="checkout">
            {createOrder ? (
                <div>
                    <h1> Gracias por tu Compra 😁<span style={{color: '#7e5e60'}}> {dataForm.name} {dataForm.surname}</span></h1>
                    <br />
                    <p>
                        Tu order de compra es :<span style={{fontSize: 23, color: '#7e5e60'}}> {createOrder}</span>
                    </p>
                    <p>
                        le enviamos la factura a<span style={{color: '#7e5e60', fontSize: 23}}> {dataForm.email} </span>
                    </p>
                    <p>
                        su juego va llegar a<span style={{color: '#7e5e60', fontSize: 23}}> {dataForm.domicile} </span> dentro de 48hs
                    </p>
                    <br />
                    <Link to="/">
                        <button onClick={clearCart}>Ir Inicio</button>
                    </Link>
                </div>
            ) : (
                <>
                    <form onSubmit={handleCkeckout}>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input value={dataForm.name} onChange={inputChangeHandler} name="name" type="text" placeholder="Nombre"  required
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="surname">Apellido</label>
                            <input value={dataForm.surname} onChange={inputChangeHandler} name="surname" type="text" placeholder="Apellido" required
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="domicile">Domicilio</label>
                            <input value={dataForm.domicile} onChange={inputChangeHandler} name="domicile" type="text" placeholder="Domicilio"   required
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="phone">Teléfono</label>
                            <input value={dataForm.phone} onChange={inputChangeHandler} name="phone" type="text" placeholder="Teléfono" required
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="email">Email</label>
                            <input value={dataForm.email} onChange={inputChangeHandler} name="email" type="text" placeholder="Email" required
                            />
                        </div>
                        <br />
                        <button onClick={handleCkeckout}>Pagar</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default CheckoutForm;
