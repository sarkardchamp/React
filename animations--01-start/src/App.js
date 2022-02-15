import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpenHandler = () => {
    setModalIsOpen(true);
  };
  const modalCloseHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="App">
      <h1>React Animations</h1>
      {modalIsOpen && <Modal onClose={modalCloseHandler} show={modalIsOpen} />}
      {modalIsOpen && (
        <Backdrop onClick={modalCloseHandler} show={modalIsOpen} />
      )}
      <button className="Button" onClick={modalOpenHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
