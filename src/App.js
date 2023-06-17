import React from "react";

import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar2";

import Store from "./components/Store";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartProvider, { useShoppingCart } from "./contexts/ShoppingCartContext";

const App = () => {
  
  
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Store />
      </Container>
      <ShoppingCart />
    </ShoppingCartProvider>
  );
};

export default App;
