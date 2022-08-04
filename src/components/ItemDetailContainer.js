import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDetailItem } from '../firebase/firebase';

// const myMock =   {"nombre":"Fernet","precio":900,"id":1,"pictureUrl" :"../img/descarga.jfif","cantidad" :1, "description":"Un rico fernet para disfrutar con amigos"} 


const ItemDetailContainer = () => {

    let { Item } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    getDetailItem(Item).then((snapshot) => {
        setData(snapshot.data())
        setTimeout(setLoading, 2000, false)
    })
    }, [Item]);



    return (<div className="mt-10">
                {loading ? (<h3>Cargando detalles...</h3>) : (<ItemDetail item={data}/>)}
            </div>
            )
}

export default ItemDetailContainer;
