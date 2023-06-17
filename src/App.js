// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


export default function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  function hideCartHandler() {
    setIsShowCart(false);
  }
  function showCartHandler() {
    setIsShowCart(true);
  }
  return (
    <CartProvider>
      <Header onOpenCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <h1>{isShowCart}</h1>
      {isShowCart && <Cart onCloseCart={hideCartHandler} />}
    </CartProvider>
  );
}
