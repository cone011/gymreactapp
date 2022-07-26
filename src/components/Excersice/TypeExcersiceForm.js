import { useRef, useState } from "react";
import classes from "./TypeExcersiceForm.module.css";
import Card from "../UI/Card";
import Message from "../UI/Message";
import Backdrop from "../UI/Backdrop";
import Modal from "react-bootstrap/Modal";

const TypeExcersiceForm = (props) => {
  const codeInputRef = useRef();
  const nameInputRef = useRef();
  const [isShowing, setIsShowing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

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

    if (codeInputRef.current.value.trim().length === 0) {
      showMessageError("falta ingresar el usuario");
      return;
    }

    if (nameInputRef.current.value.trim().length === 0) {
      showMessageError("Falta cargar la contraseña");
      return;
    }

    const Codigo = codeInputRef.current.value;
    const Nombre = nameInputRef.current.value;

    props.onAddTypeExcersice({ Codigo: Codigo, Nombre: Nombre });
  };

  return (
    <Modal show={true}>
      <Modal.Body>
        <div>
          <Card className={classes.input}>
            <div className={classes.contactContainer}>
              <h2>{props.isNew ? "Nuevo tipo de ejercicio" : props.name}</h2>
              <form onSubmit={submitHandler}>
                <input type="text" placeholder="codigo" ref={codeInputRef} />
                <input type="text" placeholder="Nombre" ref={nameInputRef} />
                <button type="submit">Guardar</button>
              </form>
            </div>
          </Card>
          {isShowing ? (
            <Message
              show={isShowing}
              closed={modalHandler}
              isError={isError}
              message={message}
            />
          ) : null}
          {isShowing ? <Backdrop show /> : null}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TypeExcersiceForm;
