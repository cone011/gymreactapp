import { CALL_API_ROUTE } from "./ApiRoute";

export async function getAllTypeExecersie() {
  const response = await fetch(`${CALL_API_ROUTE}/TipoEjercicio`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the datas");
  }

  const transformedData = [];

  for (const key in data.posts) {
    const typeExercicesObj = {
      IdTipoEjercicio: key,
      ...data.posts[key],
    };

    transformedData.push(typeExercicesObj);
  }

  return transformedData;
}

export async function getSingleTypeExercise(IdTipoEjercicio) {
  const response = await fetch(
    `${CALL_API_ROUTE}/api/TipoEjercicio/${IdTipoEjercicio}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the data");
  }

  const loadedTypeExercise = {
    id: IdTipoEjercicio,
    ...data,
  };

  return loadedTypeExercise;
}

export async function addTypeExercise(typeExerciseData) {
  const response = await fetch(`${CALL_API_ROUTE}/TipoEjercicio`, {
    method: "POST",
    body: JSON.stringify(typeExerciseData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not add the data");
  }

  return { IdTipoEjercicio: data.IdTipoEjercicio };
}
