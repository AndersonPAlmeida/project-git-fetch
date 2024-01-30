import { getRepositoriesServices } from "./services/repositories.js"
import { getUserServices } from './services/user.js'
import { getEventServices } from './services/events.js'
import { user } from './objects/user.js'
import { renderUser } from "./screen/userScreen.js"
import { renderRepositories } from "./screen/repositoriesScreen.js"
import { renderEvent } from "./screen/eventsScreen.js"
import { renderError } from "./screen/errorScreen.js"

const buttonSearch = document.querySelector('.buttonSearch')

buttonSearch.addEventListener('click', () => {
  const queryName = document.querySelector('#nameUser').value;

  if (queryName.length === 0) {
    alert('Preencha o campo com o nome do usário do GitHub.')
    return
  }
  getUserData(queryName)

})

async function getUserData(queryName) {
  const userResponse = await getUserServices(queryName)

  if(userResponse.message === 'Not Found') {
    renderError()
  } else {
    const userRepositories = await getRepositoriesServices(queryName)
    const eventsReponse = await getEventServices(queryName)
    console.log(userRepositories);
    user.setInfo(userResponse)
    user.setRepositories(userRepositories)
    user.setEvents(eventsReponse)
    
    renderUser(user)
    renderEvent(user)
    renderRepositories(user)
  }
}