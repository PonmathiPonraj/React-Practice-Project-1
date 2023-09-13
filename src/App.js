import React from 'react';
import  CartProvider  from './store/CartProvider';
import MedicineForm from './Components/Form-Layout/MedicineForm';
import CartButton from './Components/Cart/CartButton';

function App() {
  return (
    <CartProvider>
      <MedicineForm />
      <CartButton />
    </CartProvider>
  );
};

export default App;
