import React from 'react';

function SellerItemForm(props) {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                    {item.shoeName} - {item.price} Rs
                    <button onClick={() => props.onAddToCart(item, 'large')}>
                        Large ({item.largeQuantity})
                    </button>
                    {/* Similar buttons for medium and small sizes */}
                </li>
            ))}
        </ul>
    );
};

export default SellerItemForm;