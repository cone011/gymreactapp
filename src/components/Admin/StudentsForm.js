import { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./StudentsForm.module.css";
import Backdrop from "../UI/Backdrop";
import Message from "../UI/Message";

const StudentsForm = (props) => {
  const nameInputRef = useRef();
  const cedulaInputRef = useRef();
  const fechaNacInputRef = useRef();
  const edadInputRef = useRef();
  const direccionInputRef = useRef();
  const telefonoInputRef = useRef();
  const emailInputRef = useRef();
  const [isShowing, setIsShowing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const caculatedYears = () => {
    /*if (fechaNacInputRef.current.value.toString().length <= 10) return;
    console.log(fechaNacInputRef.current.value);
    let dateHelp = new Date(fechaNacInputRef.current.value);
    let dateToday = Date.now();
    edadInputRef.current.value =
      dateToday.getFullYear() - dateHelp.getFullYear();*/
  };

  const modalHandler = () => {
    setIsShowing(!isShowing);
  };

  const showMessageError = (mensaje) => {
    setMessage(mensaje);
    setIsError(true);
    modalHandler();
  };

  const studentSubmitHandler = (event) => {
    event.preventDefault();

    if (nameInputRef.current.value.trim().length === 0) {
      showMessageError("Favor cargue su nombre");
      return;
    }

    if (cedulaInputRef.current.value.trim().length === 0) {
      showMessageError("Favor cargue su cedula");
      return;
    }

    if (edadInputRef.current.value === 0) {
      showMessageError("Favor de cargar su edad");
      return;
    }

    if (telefonoInputRef.current.value.trim().length === 0) {
      showMessageError("Favor cargar su numero de telefono");
      return;
    }

    if (direccionInputRef.current.value.trim().length === 0) {
      showMessageError("Favor cargar la direccion");
      return;
    }

    const Cedula = cedulaInputRef.current.value;
    const Nombre = nameInputRef.current.value;
    const FechaNacimiento = fechaNacInputRef.current.value;
    const Edad = edadInputRef.current.value;
    const Direccion = direccionInputRef.current.value;
    const Telefono = telefonoInputRef.current.value;
    const Email = emailInputRef.current.value;

    props.onAddAlumno({
      IdUsuario: 1,
      Cedula: Cedula,
      Nombre: Nombre,
      FechaNacimiento: FechaNacimiento,
      Edad: Edad,
      Direccion: Direccion,
      Telefono: Telefono,
      Email: Email,
      IdAlumno: 0,
    });
  };

  return (
    <div>
      <Card className={classes.input}>
        <div className={classes.contactCotainer}>
          <h2>{props.isNew ? "New Student" : props.name}</h2>
          <form onSubmit={studentSubmitHandler}>
            <input
              type="text"
              className={classes.formControl}
              placeholder="Name"
              name="name"
              ref={nameInputRef}
            />
            <input
              type="text"
              className={classes.formControl}
              placeholder="Cedula"
              name="cedla"
              ref={cedulaInputRef}
            />
            <input
              type="date"
              className={classes.formControl}
              placeholder="dd-mm-yyyy"
              name="fechaNacimiento"
              onChange={caculatedYears}
              ref={fechaNacInputRef}
            />

            <input
              type="number"
              className={classes.formControl}
              placeholder="Edad"
              name="edad"
              ref={edadInputRef}
            />
            <input
              type="text"
              className={classes.formControl}
              placeholder="Direccion"
              name="direccion"
              ref={direccionInputRef}
            />
            <input
              type="text"
              className={classes.formControl}
              placeholder="Telefono"
              name="telefono"
              ref={telefonoInputRef}
            />
            <input
              type="email"
              className={classes.formControl}
              placeholder="Email"
              name="email"
              ref={emailInputRef}
            />
            <button type="submit">
              {props.isNew ? "Guardar" : "Modificar"}
            </button>
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
  );
};

export default StudentsForm;
