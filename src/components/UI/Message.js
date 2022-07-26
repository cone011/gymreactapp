import classes from "./Message.module.css";
import CssTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Message = (props) => {
  return (
    <CssTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.ModalOpen,
        exit: "",
        exitActive: classes.ModalClosed,
      }}
    >
      <div className={classes.Modal}>
        <h1>{props.message}</h1>
        <button
          className={
            props.isError ? classes.ButtonError : classes.ButtonSuccess
          }
          onClick={props.closed}
        >
          Cerrar
        </button>
      </div>
    </CssTransition>
  );
};

export default Message;
