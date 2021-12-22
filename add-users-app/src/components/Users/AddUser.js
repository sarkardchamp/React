import { Fragment, useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [errorState, setErrorState] = useState(false);

  const addUserHandler = (event) => {
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorState({
        title: "Invalid username or age!",
        message: "Name or Age can not be blank.",
      });
      return;
    } else if (+enteredAge.trim() <= 0) {
      setErrorState({
        title: "Invalid age!",
        message: "Age must be positive (>0).",
      });
      return;
    } else {
      props.onAddUser(enteredUsername, enteredAge);
      setErrorState(null);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };
  const ModalHandler = (event) => {
    setErrorState(null);
  };
  return (
    <Fragment>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onClick={ModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
