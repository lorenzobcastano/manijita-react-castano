import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { getItems, getItemsFiltered } from "../firebase/firebase";

const ItemListContainer = ({greeting}) => {

    let {nombreCategoria} = useParams();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

useEffect(() => {
(nombreCategoria === undefined ? (getItems()) : getItemsFiltered(nombreCategoria)).then((snapshot) => {
    setProducts(
    snapshot.docs.map((document) => ({
        ...document.data(),
    }))
    );
    setTimeout(setLoading,2000,false);
    
});
}, [nombreCategoria]);

return (
<div>
<div className=''> {greeting}

</div >
<div className="">
    {loading ? <span>CARGANDO...</span>:<ItemList items={products}/>}
</div>
</div>
);
};

export default ItemListContainer;