import React from 'react';
import  {useState} from 'react';

const ItemCount = ({stock, initial,onAdd}) => {
    const [count, setCount] = useState(initial);
    const sumProd = ()=>{
        setCount(count+1);
    };
    const restProd = ()=>{
        setCount((valAnt) =>(valAnt>0 ? count - 1 : count));
    };
return (
    <div>
        <h3 >{count}</h3>
        <button className="btn btn-outline-danger" onClick={restProd}>-</button>
        <button className="btn btn-outline-success" onClick={sumProd}>+</button>
        <button className="btn btn-outline-dark" onClick={()=>{
        if(count<=stock){
            onAdd(count);
        }
        else{
        alert("Uopa! Parece que estas llevando mucho amiguito")
        }
        }}>Agregar al carrito</button>
    </div>
)
};

export default ItemCount;