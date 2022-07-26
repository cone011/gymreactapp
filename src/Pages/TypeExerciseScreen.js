import { Fragment, useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Message from "../components/UI/Message";
import Backdrop from "../components/UI/Backdrop";
import ListTypeExcersice from "../components/Excersice/ListTypeExcersice";
import useHttp from "../hooks/use-http";
import { getAllTypeExecersie } from "../lib/TypeExerciseApi";

const TypeExerciseScreen = () => {
  const {
    sendRequest,
    status,
    data: loadedTypeExercise,
    error,
  } = useHttp(getAllTypeExecersie, true);

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
    (!loadedTypeExercise || loadedTypeExercise.length === 0)
  ) {
    return (
      <Fragment>
        <Message message="No se encontro ningun resultado" isError={false} />
        <Backdrop show />
      </Fragment>
    );
  }

  return <ListTypeExcersice listTypes={loadedTypeExercise} />;
};

export default TypeExerciseScreen;
