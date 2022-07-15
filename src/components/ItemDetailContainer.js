import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
// import detail from "..detail.json";



const detail={
"id": 1,
"title": "iPhone 9",
"description": "An apple mobile which is nothing like apple",
"price": 549,
"discountPercentage": 12.96,
"rating": 4.69,
"stock": 94,
"brand": "Apple",
"category": "smartphones",
"thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
"images": [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
]
}


const ItemDetailContainer = () => {
    const getItem= new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(detail,setDetail(false));
        },2000);
        console.log(detail);
    });
    getItem.then((detail)=>setDetail(detail))
    const[detail,setDetail] = useState(true);
    const [loading,setLoading]= useState([false]);
return (

<div className="">
    {loading ? <span>Cargando Productos...</span>:<ItemDetail items={detail}/>}
</div>


)
}

export default ItemDetailContainer;