import React from "react";

import "./Modal.css";

const modal = (props) => {
  const cssClasses = `Modal ${props.show ? "ModalOpen" : "ModalClose"}`;
  return (
    <div className={cssClasses}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.onClose}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
