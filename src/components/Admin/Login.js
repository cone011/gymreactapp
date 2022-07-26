import { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";
import Message from "../UI/Message";
import Backdrop from "../UI/Backdrop";
const Login = (props) => {
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const cedulaInputRef = useRef();
  const cellInputRef = useRef();
  const passwordValidInputRef = useRef();
  const [isShow, setIsShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const modalHandler = () => {
    setIsShow(!isShow);
  };

  const loginSubmitEvent = (event) => {
    event.preventDefault();

    if (props.isRegister) {
      if (userInputRef.current.value.trim().length === 0) {
        showMessage("falta ingresar el usuario");
        return;
      }

      if (passwordInputRef.current.value.trim().length === 0) {
        showMessage("Falta cargar la contraseña");
        return;
      }

      //CALL pa_GetValidUsuario
    } else {
      if (nameInputRef.current.value.trim().length === 0) {
        showMessage("Falta cargar su nombre");
        return;
      }

      if (cedulaInputRef.current.value.trim().length === 0) {
        showMessage("Falta cargar la cedula");
        return;
      }

      if (userInputRef.current.value.trim().length === 0) {
        showMessage("falta ingresar un email");
        return;
      }

      if (cellInputRef.current.value.trim().length === 0) {
        showMessage("Falta ingresar un celular");
        return;
      }

      if (
        passwordInputRef.current.value !== passwordValidInputRef.current.value
      ) {
        showMessage("Las contraseñas no coinciden");
        return;
      }

      //CALL pa_InsertNewUser
    }

    setMensaje(userInputRef.current.value.trim());

    modalHandler();
  };

  const showMessage = (message) => {
    setMensaje(message);
    setIsError(true);
    modalHandler();
  };

  return (
    <div>
      <Card className={classes.input}>
        <div className={classes.signupLogin}>
          <h2>App Gym Login</h2>
          <div className={classes.options}>
            <h3>Login</h3>
          </div>

          {props.isRegister ? (
            <form onSubmit={loginSubmitEvent}>
              <input type="email" ref={userInputRef} placeholder="Email" />
              <input
                type="password"
                ref={passwordInputRef}
                placeholder="Password"
              />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={loginSubmitEvent}>
              <input type="text" placeholder="Nombre" ref={nameInputRef} />
              <input type="text" placeholder="Cedula" ref={cedulaInputRef} />
              <input type="email" placeholder="Email" ref={userInputRef} />
              <input type="text" placeholder="Telefono" ref={cellInputRef} />
              <input
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
              <input
                type="password"
                placeholder="Escriba de nuevo su contraeña"
                name="validPassword"
                ref={passwordValidInputRef}
              />
              <button type="submit">Sign up</button>
            </form>
          )}
        </div>
      </Card>
      {isShow ? (
        <Message
          show={isShow}
          closed={modalHandler}
          isError={isError}
          message={mensaje}
        />
      ) : null}
      {isShow ? <Backdrop show /> : null}
    </div>
  );
};

export default Login;
