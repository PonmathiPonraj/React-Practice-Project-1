import React, { useState } from 'react';
import './App.css';
import SellerForm from './Components/SellerForm';
import SellerItemForm from './Components/SellerItemForm';
import Consumer from './Components/Consumer';
import CartButton from './Components/CartButton';
import Cart from './Components/Cart';
import Modal from './Components/Modal';
import CartProvider from './Components/CartProvider';

function App() {
  const [sellerItems, setSellerItems] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addItemHandler = (newItem) => {
    setSellerItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Modal onClose={hideCartHandler}>
          <Cart onClose={hideCartHandler} />
        </Modal>
      )}

      <SellerForm onAddItem={addItemHandler} />
      <SellerItemForm items={sellerItems} />
      <Consumer />
      <CartButton onShowCart={showCartHandler} />
    </CartProvider>  
  );
};

export default App;
