import React from 'react'

    const ItemDetail = ({id,title,description,price,discountPercentage,rating,stock,brand,category,images}) => {
return (
    <div className='card '> 
<div className="card-body"  >
<img src={images} className="card-img-top"  alt={title}/>
    <h5 className="card-title">{title}</h5>
    <span>{description}</span>
    <p className="card-text text-secondary">{price}</p>
    <p>{discountPercentage}</p>
    <p>{rating}</p>
    <p>{stock}</p>
    <h3>{brand}</h3>
    <p>{category}</p>
    <a href={'/' + id} className="btn btn outline-primary">Pasar a comprar</a>
</div>
</div>
)
}
export default ItemDetail;

