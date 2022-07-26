import { CALL_API_ROUTE } from "./ApiRoute";

export async function GetAllAlumnos() {
  const response = await fetch(`${CALL_API_ROUTE}/Alumno`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.messsage || "Could not fetch the data");
  }

  const transformedData = [];

  for (const key in data) {
    const alumnoObject = {
      id: key,
      ...data,
    };
    transformedData.push(alumnoObject);
  }
  return transformedData;
}

export async function getSingleAlumno(IdAlumno) {
  const response = await fetch(`${CALL_API_ROUTE}/Alumno/${IdAlumno}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.messsage || "Could not fetch the alumno");
  }

  const loadedAlumno = {
    id: IdAlumno,
    ...data,
  };

  return loadedAlumno;
}

export async function saveAlumno(alumnoData) {
  let ApiRoute;

  if (alumnoData.IdAlumno === 0) {
    ApiRoute = `${CALL_API_ROUTE}/Alumno`;
  } else {
    ApiRoute = `${CALL_API_ROUTE}/Alumno/Update`;
  }

  console.log(alumnoData);

  const response = await fetch(ApiRoute, {
    method: "POST",
    body: JSON.stringify(alumnoData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
}

export async function deleteAlumno(IdAlumno) {
  const response = await fetch(`${CALL_API_ROUTE}/Alumno`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.messsage || "Could not delete the alumno");
  }

  console.log(data);
}
