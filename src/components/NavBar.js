import  CartWidget  from "./CartWidget"; 
import React  from "react"
import {Link,NavLink} from "react-router-dom";

const NavBar = () => {
    // let Links = [
    //     {name:"INICIO",link:"/"},
    //     {name:"CATEGORIAS",link:"/"},
    //     {name:"OFERTAS",link:"/"},
    //     {name:"NOVEDADES",link:"/"},
    //     {name:"SOBRE NOSOTROS",link:"/"},
    // ];
    return (
    <div className="shadow-md w-full  top-0 left-0">
        <div className="md:flex items-center justify-between  bg-white py-4 md:px-10 px-7 ">
            <div  className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins]
        text-gray-800">
            <span className="text-3x1 text-indigo-600 mr-1 pt-2">
            <ion-icon name="bag-handle"></ion-icon>
            </span>
            <Link to="/">Manijita Bebidas</Link>
            <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
            <li><NavLink to="/category/bebidas">Bebidas</NavLink></li>
            <li><NavLink to="/category/combos">Combos</NavLink></li>
            <li>Nuestras sucursales</li>
                {
                /* {
                    Links.map((link)=>(
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                        <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500"> {link.name} </a>
                        </li>
                    ))
                } */}
            </ul>
            <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            
            <ion-icon name="grid-outline"></ion-icon>

            </div>
            </div>

            <CartWidget/>
        </div>
    </div>
    )

    
}

export default NavBar