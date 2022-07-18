import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({id,nombre,cantidad,precio,pictureUrl}) => {
return (
    <div className='card '> 
<div className="card-body"  >
<figure>
        <Link to={"/producto/"+id}><img src= {pictureUrl} className = "pt-4 max-h-48" alt = {nombre}></img></Link>
        </figure>
{/* <img src={pictureUrl} className="card-img-top"  alt={nombre}/> */}
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text text-secondary">{precio}</p>
    <Link to={"/producto/"+id}><button className="btn btn-primary bg-primary w-100% mb-4">Ver Detalles</button></Link>

</div>
</div>
)
}



export default Item;



