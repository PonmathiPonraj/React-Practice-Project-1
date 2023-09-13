import React, { useState } from 'react';

function SellerForm(props) {
    const [shoeName, setShoeName] = useState('');
    const [largeQuantity, setLargeQuantity] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(),
            shoeName,
            largeQuantity,
        };

        props.onAddItem(newItem);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="shoeName">Shoe Name</label>
            <input
                type="text"
                id="shoeName"
                value={shoeName}
                onChange={(e) => setShoeName(e.target.value)}
            />

            <label htmlFor="largeQuantity">Large Quantity</label>
            <input
                type="number"
                id="largeQuantity"
                value={largeQuantity}
                onChange={(e) => setLargeQuantity(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default SellerForm;