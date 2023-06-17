import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  let buttonClasses = `${styles.button} ${isButtonHighlighted && styles.bump}`;
  let { items } = cartCtx;
  const totalNumberOfItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timerHandler = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timerHandler);
    };
  }, [totalNumberOfItems]);
  return (
    <button className={buttonClasses} onClick={props.openCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalNumberOfItems}</span>
    </button>
  );
};
export default HeaderCartButton;
