import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItem, updatedItems;
  updatedItems = [...state.items];
  if (action.type === 'ADD_TO_CART') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingItemIndex != -1) {
      const existingCartItem = state.items[existingItemIndex];
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedtotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  } else if (action.type === 'REMOVE_FROM_CART') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item
    );
    let existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItemIndex !== -1 && existingCartItem.amount >= 1) {
      updatedItem = { ...existingCartItem, amount: existingCartItem.amount-- };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.splice(existingCartItemIndex, 1);
    }
    const updatedtotalAmount = state.totalAmount - existingCartItem.price;
    return { items: updatedItems, totalAmount: updatedtotalAmount };
  }
  return defaultCart;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const addItemToCart = (item) => {
    dispatchCartAction({ type: 'ADD_TO_CART', item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: 'REMOVE_FROM_CART', item: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
