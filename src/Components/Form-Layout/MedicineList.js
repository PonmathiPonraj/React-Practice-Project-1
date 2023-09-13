import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const MedicineList = (props) => {
    const cartCtx = useContext(CartContext);

    const { medicineName, descripitionchange, pricechange, quantitychange } = props.medicineData;

    const addtoCartHandler = () => {
        cartCtx.addItem({
            name: medicineName,
            description: descripitionchange,
            price: pricechange,
            quantity: +quantitychange, // Convert quantity to a number
        });
    };

    return (
        <ul>
            <li>
                <span>MedicineName: {medicineName}</span>
                <span>Reason: {descripitionchange}</span>
                <span>Price: {pricechange}</span>
                <span>Quantity: {quantitychange}</span>
                <button onClick={addtoCartHandler}>Add to Cart</button>
            </li>
        </ul>
    );
};

export default MedicineList;