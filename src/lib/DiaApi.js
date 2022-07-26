import { CALL_API_ROUTE } from "./ApiRoute";

export async function getAllDays() {
  const response = await fetch(`${CALL_API_ROUTE}/Dia`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could  no get the days");
  }

  const transformedData = [];

  for (const key in data.result) {
    const dayObj = {
      id: key,
      ...data.result[key],
    };
    transformedData.push(dayObj);
  }
  return transformedData;
}
