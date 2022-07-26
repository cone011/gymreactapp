import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ExcersiceForm from "../components/Excersice/ExcersiceForm";
import useHttp from "../hooks/use-http";
import { saveExersice } from "../lib/ExcersiceApi";

const Excersice = (props) => {
  const { sendRequest, status } = useHttp(saveExersice);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);

  const saveExcerciseHandler = (excersiceData) => {
    sendRequest(excersiceData);
  };

  return <ExcersiceForm onSaveExcercise={saveExcerciseHandler} />;
};

export default Excersice;
