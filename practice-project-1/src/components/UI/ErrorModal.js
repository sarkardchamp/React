import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={classes.content}>
          <p>{props.errMsg}</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onClick}>Ok</Button>
        </div>
      </Card>
    </div>
  );
};
const ErrorModal = (props) => {
  return ReactDom.createPortal(
    <Modal onClick={props.onClick} errMsg={props.errMsg} />,
    document.getElementById("modal")
  );
};

export default ErrorModal;
