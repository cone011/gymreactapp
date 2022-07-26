import { CALL_API_ROUTE } from "./ApiRoute";

export async function getAllExercise() {
  const response = await fetch(`${CALL_API_ROUTE}/Ejercicio`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the datas");
  }

  const transformedData = [];

  for (const key in data.result) {
    const exerciseObj = {
      IdEjercicio: key,
      ...data.result[key],
    };
    transformedData.push(exerciseObj);
  }

  return transformedData;
}

export async function getObjectByIdExersice(IdEjercicio) {
  const response = await fetch(`${CALL_API_ROUTE}/Ejercicio/${IdEjercicio}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get the data");
  }

  const exerciseObj = {
    id: IdEjercicio,
    ...data,
  };

  return exerciseObj;
}

export async function GetObjectByBaseEjercicio(IdTipoEjercicio) {
  const response = await fetch(
    `${CALL_API_ROUTE}/Ejercicio/${IdTipoEjercicio}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get the data");
  }

  const transformedData = [];

  for (const key in data) {
    const exerciseObj = {
      id: key,
      ...data,
    };
    transformedData.push(exerciseObj);
  }
  return transformedData;
}

export async function saveExersice(exerciseData) {
  let ApiRoute;

  if (exerciseData.IdEjercicio === 0) {
    ApiRoute = `${CALL_API_ROUTE}/Ejercicio`;
  } else {
    ApiRoute = `${CALL_API_ROUTE}/UpdateEjercicio`;
  }

  console.log(ApiRoute);

  const response = await fetch(`${CALL_API_ROUTE}/Ejercicio`, {
    method: "POST",
    body: JSON.stringify(exerciseData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not insert or update the date");
  }

  console.log(data);
}

export async function DeleteEjercicio(IdEjercicio) {
  const response = await fetch(`${CALL_API_ROUTE}/Ejercicio/${IdEjercicio}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete the ejercicio");
  }

  console.log(data);
}
