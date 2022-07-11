import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
return (
    <div className=''>
        <div className="row">
            <div className='col-md-2 '>
        {items.map(({id,nombre,precio,cantidad,pictureUrl})=>(
        <Item 
        id={id}
        nombre={nombre}
        precio={precio}
        cantidad={cantidad}
        pictureUrl={pictureUrl}
        key={id}
        /> 
        ))}
        </div>
        </div>
    </div>
);
};

export default ItemList