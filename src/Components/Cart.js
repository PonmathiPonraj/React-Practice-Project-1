import React, { useContext } from 'react';
import CartContext from './cart-context';

function Cart(props) {
    const cartContext = useContext(CartContext);

    const cartItems = cartContext.items.map((item) => (
        <li key={item.id}>
            {item.shoeName} - {item.price} Rs
        </li>
    ));

    return (
        <div>
            <ul>{cartItems}</ul>
            <p>Total: {cartContext.totalAmount} Rs</p>
            <button onClick={props.onClose}>Close</button>
        </div>
    );
};

export default Cart;