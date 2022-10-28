import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/Productos/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContextProvider from './Context/cartContext';
import Carrito from './componentes/Carrito/Carrito';
import FavContextProvider from './Context/favContext';
import Favorito from './componentes/Favorito/Favorito';
import CheckoutForm from './componentes/CheckoutForm/CheckoutForm';
import ItemListContainer2 from './componentes/Productos/ItemListContainer2';
import Novedades from './componentes/Novedades/Novedades';

function App() {
  return (
    <BrowserRouter className="App">
      <CartContextProvider>
        <FavContextProvider>
          <NavBar />
          <Routes >
            <Route path='/' element={<ItemListContainer greeting='Juegos excelentes de PS5 y PS4' />} />
            <Route path='/novedades' element={<Novedades />} />
            <Route path='/productos' element={<ItemListContainer2 />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer2 />} />
            <Route path='/productos/:id' element={<ItemDetailContainer />} />
            <Route path='/plataforma/:plataforma' element={<ItemListContainer2 />} />

            <Route path='/checkoutForm' element={<CheckoutForm />} />
            <Route path='/usuario' element={<Login />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/favorito' element={<Favorito />} />
            <Route path='*' element={<h1 className='conten__error'>No se han encontrado resultados</h1>} />
          </Routes>
          <Footer />
          <ToastContainer />
        </FavContextProvider>
      </CartContextProvider>
    </BrowserRouter >

  );
}

export default App;

