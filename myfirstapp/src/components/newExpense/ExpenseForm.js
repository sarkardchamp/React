import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const changeTitleHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const changeAmountHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: +event.target.value,
      };
    });
  };
  const changeDateHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddExpenseData(userInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    setIsFormOpen(false);
  };
  const openFormHandler = () => {
    setIsFormOpen(true);
  };
  const cancelHandler = () => {
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    setIsFormOpen(false);
  };
  if (!isFormOpen) {
    return <button onClick={openFormHandler}>Add New Expense</button>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={changeTitleHandler}
            required
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
            value={userInput.enteredAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
            required
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
