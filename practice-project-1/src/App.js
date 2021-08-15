import React, { useState } from "react";
import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [isValid, setIsValid] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [users, setUsers] = useState([]);
  const checkValidity = (validity) => {
    setIsValid(validity);
  };
  const setErrorMessage = (msg) => {
    setErrMsg(msg);
  };
  const addUserHandler = (name, age) => {
    setUsers((prevState) => {
      return [...prevState, [name, age]];
    });
  };
  const errClickHandler = (event) => {
    setIsValid(true);
  };
  return (
    <React.Fragment>
      <AddUser
        setValidity={checkValidity}
        setErrorMessage={setErrorMessage}
        addUser={addUserHandler}
      />
      {!isValid && <ErrorModal errMsg={errMsg} onClick={errClickHandler} />}
      <UserList users={users} />
    </React.Fragment>
  );
}

export default App;
