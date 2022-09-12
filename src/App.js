import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/Productos/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Juegos excelentes de PS5 y PS4'/>
        <Footer/>
    </div>
  );
}

export default App;
 