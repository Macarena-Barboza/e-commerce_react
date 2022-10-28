import React, {useState, useContext} from 'react';
import {cartContext} from '../../Context/cartContext';
import firestore from '../../services/firestore';
import {collection, addDoc} from 'firebase/firestore';
import {Link} from 'react-router-dom';
import './checkoutForm.scss';
import '../Carrito/carrito.scss';


function CheckoutForm() {
    const context = useContext(cartContext);
    const {cart, getTotalItemInCart, clearCart} = context;

    const [createOrder, setCreateOrder] = useState(false);

    const [dataForm, setDataForm] = useState({
        name: '',
        surname: '',
        phone: '',
        domicile: '',
        province:'',
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

    return (
        <div className="checkout">
            {(createOrder) ? (
                <div className='carrito'>
                    <h1 style={{lineHeight:"45px"}}> Gracias por tu Compra 😁<span style={{color: 'rgb(243, 122, 42)',marginTop:"1rem"}}> {dataForm.name} {dataForm.surname}</span></h1>
                    <br />
                    <p>
                        Tu order de compra es :<span style={{fontSize: 23, color: 'rgb(243, 122, 42)'}}> {createOrder}</span>
                    </p>
                    <p>
                        le enviamos la factura a<span style={{color: 'rgb(243, 122, 42)', fontSize: 23}}> {dataForm.email} </span>
                    </p>
                    <p>
                        su juego va llegar a<span style={{color: 'rgb(243, 122, 42)', fontSize: 23}}> {dataForm.domicile} </span> dentro de 48hs
                    </p>
                    <br />
                    <Link to="/">
                        <button className='btn' onClick={clearCart}>Ir Inicio</button>
                    </Link>
                </div>
            ) : (
                <>
                    <form onSubmit={handleCkeckout} className="checkout__form">
                        <div className="checkout__input">
                            <label htmlFor="name">Nombre</label>
                            <input value={dataForm.name} onChange={inputChangeHandler} name="name" type="text" placeholder="Nombre"  required
                            />
                        </div>

                        <div className="checkout__input">
                            <label htmlFor="surname">Apellido</label>
                            <input value={dataForm.surname} onChange={inputChangeHandler} name="surname" type="text" placeholder="Apellido" required />
                        </div>

                        <div className="checkout__input">
                            <label htmlFor="province">Provincia</label>
                            <select name="province" value={dataForm.province} required  onChange={inputChangeHandler} >
                                <option value="Buenos Aires">Buenos Aires</option>
                                <option value="Catamarca">Catamarca</option>
                                <option value="Chaco">Chaco</option>
                                <option value="Chubut">Chubut</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Corrientes">Corrientes</option>
                                <option value="Entre Ríos">Entre Ríos</option>
                                <option value="Formosa">Formosa</option>
                                <option value="Jujuy">Jujuy</option>
                                <option value="La Pampa">La Pampa</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Mendoza">Mendoza</option>
                                <option value="Misiones">Misiones</option>
                                <option value="Neuquén">Neuquén</option>
                                <option value="Río Negro">Río Negro</option>
                                <option value="Salta">Salta</option>
                                <option value="San Juan">San Juan</option>
                                <option value="San Luis">San Luis</option>
                                <option value="Santa Cruz">Santa Cruz</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="Santiago del Estero">Santiago del Estero</option>
                                <option value="Tierra del Fuego">Tierra del Fuego</option>
                                <option value="Tucumán">Tucumán</option>
                            </select>
                        </div>

                        <div className="checkout__input">
                            <label htmlFor="domicile">Domicilio</label>
                            <input value={dataForm.domicile} onChange={inputChangeHandler} name="domicile" type="text"  placeholder="Domicilio"  required minLength={4}/>
                        </div>

                        <div className="checkout__input">
                            <label htmlFor="phone">Teléfono</label>
                            <input value={dataForm.phone} onChange={inputChangeHandler} name="phone" type="number" placeholder="Teléfono" min={1123456789} required/>
                        </div>

                        <div className="checkout__input">
                            <label htmlFor="email">Email</label>
                            <input value={dataForm.email} onChange={inputChangeHandler} name="email" type="email" placeholder="Email" required/>
                        </div>
                        <button className='btn checkout__btn'type="submit">Pagar</button>
                    </form>
                </>
            )}
        </div>

    );
}

export default CheckoutForm;
