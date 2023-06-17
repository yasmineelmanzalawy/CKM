import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';
// import useValidation from '../../hooks/use-validation';

const validateIsEmpty = (val) => val.trim() !== '';
const validateFiveChar = (val) => val.length === 5;
const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const [formValid, setFormValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  // const {entededInput: enteredName,isInputTouched:isNameTouched,isInputValid:IsNameValid, inputChangeHandler:nameChangeHandler, inputBluHandler: nameBlurHandler } = useValidation()
  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const isNameValid = validateIsEmpty(name) || false;
    const isStreetValid = validateIsEmpty(street) || false;
    const isPostalValid = validateFiveChar(postal) || false;
    const isCityValid = validateIsEmpty(city) || false;
    let isFormValid =
      isNameValid && isStreetValid && isPostalValid && isCityValid;
    setFormValid({
      name: isNameValid,
      street: isStreetValid,
      postal: isPostalValid,
      city: isCityValid,
    });
    if (isFormValid) {
      props.onSubmitHandler({
        name,
        street,
        postal,
        city,
      });
    }
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formValid.name ? classes.invalid : ''
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValid.name && <p>Please Enter Name </p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValid.street && <p>Please Enter street </p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValid.postal && <p>Please Enter Postal </p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValid.city && <p>Please Enter City </p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCloseModal}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
