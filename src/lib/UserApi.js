import { CALL_API_ROUTE } from "./ApiRoute";

export async function GetAllUsers() {
  const response = await fetch(`${CALL_API_ROUTE}/Usuario`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get the users data");
  }

  const transformedData = [];

  for (const key in data.result) {
    const usuarioObj = {
      id: key,
      ...data.result[key],
    };
    transformedData.push(usuarioObj);
  }
  return transformedData;
}

export async function GetObjectByIdUsuario(IdUsuario) {
  const response = await fetch(`${CALL_API_ROUTE}/Usuario/${IdUsuario}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.response || "Could not get the user data");
  }

  const usuarioObj = {
    id: IdUsuario,
    ...data.response[IdUsuario],
  };

  return usuarioObj;
}

export async function saveUser(userObj) {
  let ApiRoute;

  if (userObj.IdUsuario === 0) {
    ApiRoute = `${CALL_API_ROUTE}/Usuario`;
  } else {
    ApiRoute = `${CALL_API_ROUTE}/Usuario/Update`;
  }

  const response = await fetch(ApiRoute, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.response || "Could not insert/update the user");
  }

  console.log(data);
}

export async function deleteUsuario(IdUsuario) {
  const response = await fetch(`${CALL_API_ROUTE}/Usuario/${IdUsuario}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete the user");
  }

  console.log(data);
}
