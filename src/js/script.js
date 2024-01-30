import { getRepositoriesServices } from "./services/repositories.js"
import { getUserServices } from './services/user.js'
import { getEventServices } from './services/events.js'
import { user } from './objects/user.js'
import { renderUser } from "./screen/userScreen.js"
import { renderRepositories } from "./screen/repositoriesScreen.js"
import { renderEvent } from "./screen/eventsScreen.js"

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
  const userRepositories = await getRepositoriesServices(queryName)
  

  if(userResponse.message === 'Not Found') {
    user.setMessage(userResponse.message)
  } else {
    const eventsReponse = await getEventServices(queryName)

    user.setInfo(userResponse)
    user.setRepositories(userRepositories)
    user.setEvents(eventsReponse)
    user.setMessage('')
  }
  renderUser(user)
  renderEvent(user)
  renderRepositories(user)
}