import { containerRepositories, listRepositories } from "./variablesScreen.js"

export function renderRepositories(user) {
  let repositoriesList = ''

  if(user.repositories.length === 0) {
    repositoriesList = `<h3>Usuário não tem repositórios no github.</h3>`
  } 
  
  user.repositories.forEach((repositor) => {
    repositoriesList += ` <li class="repositor">
                            <a href="${repositor.html_url}" target="_blank">${repositor.name}</a>
                          </li>
                        `
  })
  
  listRepositories.innerHTML = repositoriesList
  containerRepositories.classList.remove('hidden')

}