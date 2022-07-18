 import React,{useState,useEffect} from 'react'
 import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const myMock =   {"nombre":"Fernet","precio":900,"id":1,"pictureUrl" :"./img/descarga.jfif","cantidad" :1, "description":"Un rico fernet para disfrutar con amigos"} 


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);


    const getItem = new Promise ( (resolve,reject) => {
        resolve(false)
    })

    getItem.then(()=> {
        setTimeout(setLoading,2000,)
        setTimeout(setItem,2000,myMock)
    }).catch(()=> alert("Ocurrio un error"))


    return (<div className="mt-10">
                {loading ? (<h3>Cargando detalles...</h3>) : (<ItemDetail item={item}/>)}
            </div>
            )
}

 export default ItemDetailContainer;
