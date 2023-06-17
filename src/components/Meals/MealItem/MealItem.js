import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import Card from '../../UI/Card';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;
  const addAmountHandler = (amount) => {
    console.log(props.meal);
    console.log(amount);
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddAmount={addAmountHandler} />
      </div>
    </li>
  );
};

export default MealItem;
