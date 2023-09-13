import React, { useState } from 'react';
import CartContext from './cart-context';

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        setCartItems((prevItems) => [...prevItems,{...item,quantity:1}]);
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