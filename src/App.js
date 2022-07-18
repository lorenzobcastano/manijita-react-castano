import './App.css';
import react from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Outlet,Routes,Route} from "react-router-dom";


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
      <Route path="/" element={<div className='flex-row flex-wrap'><ItemListContainer greeting = {"Bienvenido a Manijita Bebidas este es nuestro catalogo!"}/></div>} />
      <Route path="/category/:nombreCategoria" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
      <Route path="/producto/:Item" element={<ItemDetailContainer/>} />
    </Routes>
    
  </BrowserRouter>
    // <BrowserRouter>
    // <div>
    // <div className="App">
    //   <div >
    //   <NavBar/>
    //   </div>
    //   <Outlet/>
    //   </div>

    //   <Routes>
    //   <ItemListContainer greeting = {"Bienvenido a Manijita Bebidas este es nuestro catalogo!"}/>
    //   <ItemDetailContainer/>
      
     
    // </div>
    // </Routes>
    // </BrowserRouter>

  );
}

export default App;
