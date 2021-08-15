import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUSername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUSername.trim().length === 0 || enteredAge.trim().length === 0) {
      props.setValidity(false);
      setEnteredUsername("");
      props.setErrorMessage(
        "Please enter valid Name and Age (non-empty values)."
      );
      return;
    } else if (Number(enteredAge.trim()) < 0) {
      props.setValidity(false);
      setEnteredAge("Please enter a valid Age (>0).");
      props.setErrorMessage("Please ");
      return;
    }
    props.setValidity(true);
    props.addUser(enteredUSername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUSername}
        />
        <label>Age (in Years)</label>
        <input type="number" onChange={ageChangeHandler} value={enteredAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
