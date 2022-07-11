import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from "../products.json"

const ItemListContainer = ({greeting}) => {
    
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(setLoader,2000,false);
    },[]);
return (
<div>
<div className=''> {greeting}
<ItemCount stock={5} initial={1} onAdd={(n)=>alert(`Seleccionaste ${n} bebidas`)}/>
</div >
<div className="">
    {loader? (<h2>Cargando Productos...</h2>):(<ItemList items={products}/>)}
</div>
</div>
);
};

export default ItemListContainer;