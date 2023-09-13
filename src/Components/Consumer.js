import React, { useContext } from 'react';
import CartContext from './cart-context';

function Consumer(props) {
    const cartContext = useContext(CartContext);

    return (
        <div>
            {props.items.map((item) => (
                <div key={item.id}>
                    {item.shoeName} - {item.price} Rs
                    <button onClick={() => cartContext.addItem(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Consumer;