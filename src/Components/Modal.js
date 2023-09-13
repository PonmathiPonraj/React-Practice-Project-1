import React, { Fragment } from 'react';

const Modal = (props) => {
    const { cartItems, onCancel, onOrder } = props;

    return (
        <div className="cart-modal">
            <ul>
                {cartItems.map((item) => (
                    <li key={item.name}>
                        <span>MedicineName: {item.name}</span>
                        <span>Reason: {item.description}</span>
                        <span>Price: {item.price}</span>
                        <span>Quantity: {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onOrder}>Order</button>
        </div>
    );
};

export default Modal;