import React, { useState } from 'react';
import CartContext from './CartContext'; // Update the import if needed

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const clearCartHandler = () => {
        setCartItems([]);
    };

    const contextValue = {
        items: cartItems,
        addItem: addItemHandler,
        clearCart: clearCartHandler,
        // ... other methods if needed
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;