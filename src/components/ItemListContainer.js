import React, {useState} from 'react';
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

</div >
<div className="">
    {loader ? <span>CARGANDO...</span>:<ItemList items={products}/>}
</div>
</div>
);
};

export default ItemListContainer;