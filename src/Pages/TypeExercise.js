import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TypeExcersiceForm from "../components/Excersice/TypeExcersiceForm";
import useHttp from "../hooks/use-http";
import { addTypeExercise } from "../lib/TypeExerciseApi";

const TypeExcersice = (props) => {
  const { sendRequest, status } = useHttp(addTypeExercise);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);

  const addTypeExerciseHandler = (typeExerciseData) => {
    sendRequest(typeExerciseData);
  };

  return <TypeExcersiceForm onAddTypeExcersice={addTypeExerciseHandler} />;
};

export default TypeExcersice;
