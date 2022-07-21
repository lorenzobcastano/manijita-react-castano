 import React from 'react'
 import ItemCount from "./ItemCount"
import {Link, NavLink} from "react-router-dom"
import { useState } from 'react';

    function ItemDetail ({item}) {

        const [onAddStatus,setonAddStatus]=useState(false)
        
        
        function onAddEvent(n){
            setonAddStatus(true)
            alert(`HAS AGREGADO AL CARRITO:
            ${item.nombre}
            Precio:${item.precio}
            Cantidad:${n}
            Vas a pagar : $ ${n*item.precio}`
            )
        }

        return (
    
            <div className='card w-10/12 m-auto flex flex-row flex-wrap justify-center bg-base-100 shadow-xl'>

                    <div id="imagenProducto" >
                        <img src={item.pictureUrl} className="m-auto h-4/6 max-h-full md:max-h-screen" alt= {item.nombre} />
                    </div>
    
                <div className="text-center w-6/12">
                    <h1 className="card-title justify-center m-auto text-5xl p-10">{item.nombre}</h1>
                    <p className='text-center justify-center m-auto text-xl p-10'>{item.description}</p>
                    <p className='text-center justify-center m-auto text-xl  p-10 font-bold'>Precio ${item.precio}</p>
                    {onAddStatus ? <NavLink to="/cart" className="btn btn-primary bg-primary w-24 mx-auto">Ir al Carrito</NavLink>:<div><ItemCount stock={5} initial={1} onAdd={(n)=>onAddEvent(n)}/></div> }
                    <Link to={"/"}><button className="btn btn-accent w-24 my-5">Volver</button></Link>
                 </div>
                
            </div>   
        )
    }

export default ItemDetail;



