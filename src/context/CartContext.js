import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        const exist = cart.find(el => el.id === itemId)
        return exist
    }

    const addItem = (item) => {
        const exist = isInCart(item.id)
        if (!exist) {
            setCart([...cart, item])
            console.log({item})
            console.log(cart)
        } else {
            alert("Tal producto ya esta en el carrito")
        }
    }


        const deleteItem = (id) => {
            const _items = cart.filter(el => el.id !== id);
            setCart(_items);
        };

     const clearAll = () => {
         setCart([])
     }


    const data = {
        cart,
        addItem,
        isInCart,
        deleteItem,
        clearAll
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };