import { base_url } from "./variablesServices.js";

export async function getUserServices(nameUser) {
  const response = await fetch(`${base_url}/${nameUser}`) 
  const data = await response.json()
  return data
}