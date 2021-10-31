import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const cancelHandler = () => {
    setModalIsOpen(false);
  };
  const confirmHandler = () => {};
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={cancelHandler} onConfirm={confirmHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={cancelHandler} />}
    </div>
  );
}

export default Todo;
