import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';

const getItem= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(product,setProduct(false));
    },2000);
});
// getItem.then((product)=>setDetail(product))

const [product,setProduct]= useState([]);



const ItemDetailContainer = () => {
    getItem.then((product)=>setProduct(product))
return (
</div >
<div className="">
    {product ? <span>Cargando Productos...</span>:<ItemDetail items={products}/>}
</div>
</div>
)
}

export default ItemDetailContainer