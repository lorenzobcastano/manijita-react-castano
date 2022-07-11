
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenido a Manijita Bebidas este es nuestro catalogo!"}/>
      </div>
      <div>
      <header className="App-header">

      </header>
      </div>
    </div>
  );
}

export default App;
