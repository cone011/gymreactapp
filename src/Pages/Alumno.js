import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import StudentsForm from "../components/Admin/StudentsForm";
import useHttp from "../hooks/use-http";
import { saveAlumno } from "../lib/AlumnoApi";

const Alumno = (props) => {
  const { sendRequest, status } = useHttp(saveAlumno);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [sendRequest, status]);

  const saveAlumnoHandler = (alumnoData) => {
    sendRequest(alumnoData);
  };

  return <StudentsForm onAddAlumno={saveAlumnoHandler} />;
};

export default Alumno;
