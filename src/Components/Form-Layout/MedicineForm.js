import React, { useState } from 'react';
import MedicineList from './MedicineList';

const MedicineForm = () => {
    const [medicineName, setMedicineName] = useState('');
    const [priceChange, setPriceChange] = useState('');
    const [descriptionChange, setDescriptionChange] = useState('');
    const [quantityChange, setQuantityChange] = useState('');
    const [showMedicineList, setShowMedicineList] = useState(false);
    const [medicineItems, setMedicineItems] = useState([]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newItem = {
            medicineName: medicineName,
            pricechange: priceChange,
            descriptionchange: descriptionChange,
            quantitychange: quantityChange,
        };
        setMedicineItems((prevItems) => [...prevItems, newItem]);
        setShowMedicineList(true);
    };

    const MedicineNameChangeHandler = (event) => {
        setMedicineName(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setPriceChange(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setDescriptionChange(event.target.value);
    };

    const quantityChangeHandler = (event) => {
        setQuantityChange(event.target.value);
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label>Medicine Name:</label>
                    <input type='text' id='med' onChange={MedicineNameChangeHandler} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type='text' id='Description' onChange={descriptionChangeHandler} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type='text' id='Price' onChange={priceChangeHandler} />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type='text' id='Quantity' onChange={quantityChangeHandler} />
                </div>
                <button>Add Item</button>
            </form>

            {showMedicineList && (
                <div>
                    {medicineItems.map((item, index) => (
                        <MedicineList key={index} medicineData={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MedicineForm;