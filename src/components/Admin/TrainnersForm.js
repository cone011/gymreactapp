import { useRef, useState } from "react";
import Card from "../UI/Card";
import Message from "../UI/Message";
import Backdrop from "../UI/Backdrop";
import classes from "./TrainnersForm.module.css";

const TrainnersForm = (props) => {
  const cedulaInputRef = useRef();
  const nameInputRef = useRef();
  const fechaNacInputRef = useRef();
  const edadInputRef = useRef();
  const emailInputRef = useRef();
  const [isShowing, setIsShowing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const caculatedYears = (birthDate) => {
    let dateHelp = new Date(birthDate);
    let dateToday = Date.now();
    edadInputRef.current.value =
      dateToday.getFullYear() - dateHelp.getFullYear();
  };

  const modalHandler = () => {
    setIsShowing(!isShowing);
  };

  const showMessageError = (message) => {
    setMessage(message);
    setIsError(true);
    modalHandler();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameInputRef.current.value.trim().length === 0) {
      showMessageError("Falta cargar el nombre");
      return;
    }

    if (cedulaInputRef.current.value.trim().length === 0) {
      showMessageError("Falta cargar la cedula");
      return;
    }

    if (edadInputRef.current.value === 0) {
      showMessageError("Falta cargar la edad");
      return;
    }

    if (emailInputRef.current.value.trim().length === 0) {
      showMessageError("Falta cargar el email");
      return;
    }
  };

  return (
    <div>
      <Card className={classes.input}>
        <div className={classes.contactContainer}>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className={classes.formControl}
              name="name"
              placeholder="Nombre"
              ref={nameInputRef}
            />
            <input
              type="text"
              className={classes.formControl}
              name="cedula"
              placeholder="Ingrese su cedula"
              ref={cedulaInputRef}
            />
            <input
              type="email"
              className={classes.formControl}
              name="email"
              placeholder="Ingrese su email"
              ref={emailInputRef}
            />
            <input
              type="date"
              className={classes.formControl}
              name="fechaNacimiento"
              placeholder="Ingrese su fecha de nacimiento"
              ref={fechaNacInputRef}
            />
            <input
              type="number"
              className={classes.formControl}
              name="edad"
              placeholder="Ingrese su edad"
              ref={edadInputRef}
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      </Card>
      {isError ? (
        <Message
          show={isShowing}
          closed={modalHandler}
          message={message}
          isError={isError}
        />
      ) : null}
      {isError ? <Backdrop show /> : null}
    </div>
  );
};

export default TrainnersForm;
