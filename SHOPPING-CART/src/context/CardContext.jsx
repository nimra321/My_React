import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart 
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if(existing) {
                return prev.map((item) => item.id ===  product.id ? {...item, quantity: item.quantity + 1 } : item );

            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }
    // remove product 
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }
    
    // update quantity 
    const updateQuantity = (id,quantity) => {
        setCart((prev) => 
            prev.map((item) => item.id === id ? {...item, quantity} : item)
        )
    }
    // update total 
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}
//  custom hook 
export const useCart = () => useContext(CartContext);
