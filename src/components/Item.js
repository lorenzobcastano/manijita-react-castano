import React from 'react'

export const Item = ({id,nombre,cantidad,precio,pictureUrl}) => {
return (
    <div className='card text-center'> 
<div className="card-body flex-wrap: wrap"  >
<img src={pictureUrl} className="card-img-top"  alt={nombre}/>
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text text-secondary">{precio}</p>
    <a href={'/' + id} className="btn btn outline-primary">Ver detalles</a>
</div>
</div>
)
}



export default Item;