 import React from 'react'
 import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
    function ItemDetail ({item}) {

        return (
    
            <div className='card w-10/12 m-auto flex flex-row flex-wrap justify-center bg-base-100 shadow-xl'>

                    <div id="imagenProducto" >
                        <img src={item.pictureUrl} className="m-auto h-4/6 max-h-full md:max-h-screen" alt= {item.nombre} />
                    </div>
    
                <div className="text-center w-6/12">
                    <h1 className="card-title justify-center m-auto text-5xl p-10">{item.nombre}</h1>
                    <p className='text-center justify-center m-auto text-xl p-10'>{item.description}</p>
                    <p className='text-center justify-center m-auto text-xl  p-10 font-bold'>Precio ${item.precio}</p>
                    <a href={'/' + item.id} className="btn btn outline-primary"><div><ItemCount stock={5} initial={1} onAdd={(n)=>alert(`Seleccionaste ${n} bebidas`)}/></div></a>
                    <Link to={"/"}><button className="btn btn-accent w-24 my-5">Volver</button></Link>
                 </div>
                
            </div>   
        )
    }

export default ItemDetail;



