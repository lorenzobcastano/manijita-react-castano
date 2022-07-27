import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export  const CartWidget = () => {
    
    const {clearAll, totalItems, totalPrice} = useContext(CartContext)
return (
    <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {totalItems > 0 && <span className="badge badge-sm indicator-item">{totalItems}</span>}
            </div>
        </label>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">{totalItems} Items</span>
                        <span className="text-info">Subtotal: ${totalPrice}</span>
                        <div className="card-actions flex justify-center">
                        <Link to="/cart"><button className="btn btn-primary btn-block w-24">View cart</button></Link>
                        <button className="btn btn-primary btn-block w-24" onClick={clearAll}>Clear Cart</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    // <button className='btn btn-outline-info ms-auto'>
    // <svg
    // xmlns="http://www.w3.org/2000/svg"
    // width="24"
    // height="24"
    // fill="none"
    // stroke="currentColor"
    // strokeLinecap="round"
    // strokeLinejoin="round"
    // strokeWidth="2"
    // className="feather feather-shopping-bag"
    // viewBox="0 0 24 24"
    // >
    // <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
    // <path d="M3 6L21 6"></path>
    // <path d="M16 10a4 4 0 01-8 0"></path>
    // </svg>
    
    // </button>
);
};

export default CartWidget;