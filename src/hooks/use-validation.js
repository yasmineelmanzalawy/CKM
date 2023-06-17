import React, { useState } from 'react';

const useValidation = (validateFunction) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isValidInput = validateFunction(enteredInput) && isInputTouched;

  function inputChangeHandler(value) {
    setEnteredInput(value);
  }

  function inputBlurHandler() {
    setIsInputTouched(true);
  }
  return {
    enteredInput,
    isValidInput,
    isTouched,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useValidation;
