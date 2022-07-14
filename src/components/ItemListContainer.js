import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from "../products.json"




const ItemListContainer = ({greeting}) => {
    
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(products,setLoader(false));
    },2000)
    console.log(products);
})

const [loader,setLoader]= useState(true);

return (
<div>
<div className=''> {greeting}
<ItemCount stock={5} initial={1} onAdd={(n)=>alert(`Seleccionaste ${n} bebidas`)}/>
</div >
<div className="">
    {loader ? <span>Cargando Productos...</span>:<ItemList items={products}/>}
</div>
</div>
);
};

export default ItemListContainer;