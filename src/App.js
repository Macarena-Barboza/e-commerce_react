import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/Productos/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Juegos excelentes de PS5 y PS4'/>
        <ItemDetailContainer/>
        <Footer/>
    </div>
  );
}

export default App;
 