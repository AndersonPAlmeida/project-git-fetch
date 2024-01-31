import { containerRepositories, listRepositories } from "./variablesScreen.js"

export function renderRepositories(user) {
  let repositoriesList = ''

  if(user.repositories.length === 0) {
    repositoriesList = `
                        <tr>
                          <td colspan="5" style="text-align: center;">Usuário não tem repositórios no github.</td>
                        </tr>
                      `
  } 
  
  user.repositories.forEach((repositor) => {
    repositoriesList +=
                      ` <tr>
                          <td>
                            <a href="${repositor.html_url}" target="_blank">${repositor.name}</a>
                          </td>
                          <td>${repositor.stargazers_count}</td>
                          <td>${repositor.forks_count}</td>
                          <td>${repositor.watchers_count}</td>
                          <td>${repositor.language}</td>
                        </tr>
                      `

  })
  
  listRepositories.innerHTML = repositoriesList
  containerRepositories.classList.remove('hidden')

}