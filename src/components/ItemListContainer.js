import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
return (
<div className="shadow-md w-full fixed top-16 left-0 md:block bg-white py-4 md:px-10 px-7">
<div> {greeting}</div>
<div>
<ItemCount stock={5} initial={1} onAdd={(n)=>alert(`Seleccionaste ${n} bebidas`)}/>
</div>
</div>

);
};

export default ItemListContainer;