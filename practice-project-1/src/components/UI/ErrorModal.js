import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Node = (props) => {
  const clickHandler = () => {
    props.onCancel();
  };
  return (
    <div className={classes.backdrop} onClick={clickHandler}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return ReactDOM.createPortal(
    <Node
      title={props.title}
      message={props.message}
      onCancel={props.onCancel}
    />,
    document.getElementById("modal-root")
  );
};

export default ErrorModal;
