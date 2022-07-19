import './App.css';
import react from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Outlet,Routes,Route} from "react-router-dom";
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="App">
      <NavBar/>
      </div>
        <Outlet/>
      </div>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting = {"Bienvenido a Manijita Bebidas este es nuestro catalogo!"}/>} />
      <Route path="/category/:nombreCategoria" element={<ItemListContainer/>} />
      <Route path="/producto/:Item" element={<ItemDetailContainer/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
