import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length > 0 && enteredAge > 0) {
      props.onAddUser({
        name: enteredUsername,
        age: enteredAge,
        id: Math.random().toString(),
      });
      setEnteredAge("");
      setEnteredUsername("");
    } else if (
      enteredAge.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      setError({
        title: "Invalid Input!",
        message: "Please enter non-empty name and age.",
      });
    } else if (enteredAge <= 0) {
      setError({ title: "Invalid Age!", message: "Please enter a valid age." });
    }
  };

  const onCancelHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancel={onCancelHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="usename">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUser;
