import React, { useState, useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
  const [showOrder, setShowOrder] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, isError, getHttpData: postData } = useHttp();

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.totalAmount > 0;
  const closeModal = () => {
    props.onCloseCart();
  };
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const placeOrderHandler = () => {
    setShowOrder(true);
  };
  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((cart) => (
        <li key={cart.id}>
          <CartItem
            name={cart.name}
            amount={cart.amount}
            price={cart.price}
            onAdd={addItemHandler.bind(null, cart)}
            onRemove={removeItemHandler.bind(null, cart.id)}
          />
        </li>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button onClick={props.onCloseCart} className={styles['button--alt']}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={placeOrderHandler}>
          Place Order
        </button>
      )}
    </div>
  );

  function prepareOrder(data) {
    console.log(data);
    if (data) {
      setIsSubmitted(true);
    }
    if (isError) {
      setIsSubmitted(false);
    }
  }

  function submitHandler(userData) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        userData,
        cart: cartCtx.items,
      }),
    };
    postData(
      'https://foodorderapp-51f46-default-rtdb.firebaseio.com/orders.json',
      prepareOrder,
      options
    );
  }

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <label>Total Amount</label>
        <label> {totalAmount} </label>
      </div>
      {showOrder && isSubmitted && (
        <div>
          <h3>Order Placed</h3>
          <button onClick={props.onCloseCart}>Close</button>
        </div>
      )}
      {showOrder && !isSubmitted && (
        <Checkout
          onCloseModal={props.onCloseCart}
          onSubmitHandler={submitHandler}
        />
      )}

      {!showOrder && modalActions}
    </Modal>
  );
};
export default Cart;
