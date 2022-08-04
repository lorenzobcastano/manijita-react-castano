import React from 'react'
import Item from './Item';


const ItemList = ({items}) => {
return (
    <div className='container'>
        <div className="row">
            <div className='col-sm-4 '>
        {items.map((item)=>(
        <Item 
        id={item.id}
        nombre={item.nombre}
        precio={item.precio}
        cantidad={item.cantidad}
        pictureUrl={item.pictureUrl}
        key={item.id}
        /> 
        ))}
        </div>
        </div>
    </div>
);
};

export default ItemList;