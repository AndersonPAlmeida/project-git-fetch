import { base_url, qtdRepostitories } from "./variablesServices.js";

export async function getRepositoriesServices(nameUser) {
  const response = await fetch(`${base_url}/${nameUser}/repos?per_page=${qtdRepostitories}`) 
  const data = await response.json()
  return data
}