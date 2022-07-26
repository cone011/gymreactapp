import { Fragment, useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Message from "../components/UI/Message";
import Backdrop from "../components/UI/Backdrop";
import ExcersiceList from "../components/Excersice/ExcersiceList";
import useHttp from "../hooks/use-http";
import { getAllExercise } from "../lib/ExcersiceApi";

const ExcersiceScreen = (props) => {
  const {
    sendRequest,
    status,
    data: loadedeExercise,
    error,
  } = useHttp(getAllExercise, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <Fragment>
        <Message message={error} isError={true} />
        <Backdrop show />
      </Fragment>
    );
  }

  if (
    status === "completed" &&
    (!loadedeExercise || loadedeExercise.length === 0)
  ) {
    return (
      <Fragment>
        <Message message="No se encontro ningun resultado" isError={false} />
        <Backdrop show />
      </Fragment>
    );
  }

  return <ExcersiceList listExercise={loadedeExercise} />;
};

export default ExcersiceScreen;
