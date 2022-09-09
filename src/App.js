import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p> React js</p>

    </div>
  );
}

export default App;
