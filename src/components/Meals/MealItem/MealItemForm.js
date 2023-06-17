import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const [isValidAmount, setIsValidAmount] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }
    setIsValidAmount(true);
    props.onAddAmount(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '0',
          max: '5',
          step: 1,
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p> Please Enter an amount between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
