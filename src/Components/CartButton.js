import React, { useContext } from 'react';
import CartContext from './cart-context';

function CartButton(props) {
    const cartContext = useContext(CartContext);
    const totalItems = cartContext.items.reduce((total, item) => total + item.amount, 0);

    return (
        <button onClick={props.onShowCart}>
            Cart ({totalItems})
        </button>
    );
};

export default CartButton;