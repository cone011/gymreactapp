import { useRef, useState } from "react";
import classes from "./ExcersiceForm.module.css";
import Card from "../UI/Card";
import Message from "../UI/Message";
import Backdrop from "../UI/Backdrop";

const ExcersiceForm = (props) => {
  const codeInputRef = useRef();
  const nameInputRef = useRef();
  const typeExcersiceInputRef = useRef();
  const imageInputRef = useRef();
  const videoInputRef = useRef();
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

  const exersiceSubmitHandler = (event) => {
    event.preventDefault();

    if (codeInputRef.current.value.trim().lenght === 0) {
      showMessageError("Falta cargar el codigo");
      return;
    }

    if (nameInputRef.current.value.trim().lenght === 0) {
      showMessageError("Falta cargar el nombre");
      return;
    }

    if (typeExcersiceInputRef.current.value.trim().lenght === 0) {
      showMessageError("Falta asignar el tipo de ejercicio");
      return;
    }

    if (imageInputRef.current.value.trim().lenght === 0) {
      showMessageError("Falta cargar el link de la imagen sobre el ejercicio");
      return;
    }

    if (videoInputRef.current.value.trim().lenght === 0) {
      showMessageError("Falta cargar el link del video sobre el ejercicio");
      return;
    }

    const Codigo = codeInputRef.current.value;
    const Nombre = nameInputRef.current.value;
    const TipoEjercicio = typeExcersiceInputRef.current.value;
    const IdTipoEjercicio = 2;
    const ImageUrl = imageInputRef.current.value;
    const VideoUrl = videoInputRef.current.value;

    props.onSaveExcercise({
      Codigo: Codigo,
      Nombre: Nombre,
      TipoEjercicio: TipoEjercicio,
      IdTipoEjercicio: IdTipoEjercicio,
      ImageUrl: ImageUrl,
      VideoUrl: VideoUrl,
      IdEjercicio: 0,
    });
  };

  return (
    <div>
      <Card className={classes.input}>
        <div className={classes.contactContainer}>
          <h2>{props.isNew ? "Nuevo Ejercicio" : props.name}</h2>
          <form onSubmit={exersiceSubmitHandler}>
            <input
              type="text"
              className={classes.formControl}
              placeholder="Codigo"
              ref={codeInputRef}
            />
            <input
              type="text"
              className={classes.formControl}
              placeholder="Nombre"
              ref={nameInputRef}
            />
            <select
              name="typeExersice"
              className={classes.formControl}
              ref={typeExcersiceInputRef}
            >
              <option value="Pierna">Pierna</option>
              <option value="Brazo">Brazo</option>
              <option value="Espalda">Espalda</option>
              <option value="Hombro">Hombro</option>
            </select>
            <input
              type="text"
              className={classes.formControl}
              placeholder="Favor ponga el link de la imagen"
              ref={imageInputRef}
            />
            <input
              type="text"
              className={classes.formControl}
              placeholder="Favor ponga el link del video"
              ref={videoInputRef}
            />
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
  );
};

export default ExcersiceForm;
