import { useReducer } from "react";

const useInput = (validateValue) => {
  const defaultState = {
    value: "",
    isTouched: false,
  };
  const inputReducer = (state, action) => {
    if (action.type === "INPUT") {
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    } else if (action.type === "BLUR") {
      return {
        value: state.value,
        isTouched: true,
      };
    } else return defaultState;
  };
  const [inputState, dispatch] = useReducer(inputReducer, defaultState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
