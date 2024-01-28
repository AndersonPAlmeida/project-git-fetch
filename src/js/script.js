import { getRepositoriesServices } from "./services/repositories.js"
import { getUserServices } from './services/user.js'
import { user } from './objects/user.js'
import { renderUser } from "./screen/userScreen.js"
import { renderRepositories } from "./screen/repositoriesScreen.js"

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

  console.log(userResponse);
  if(userResponse.message === 'Not Found') {
    user.setMessage(userResponse.message)
  } else {
    user.setInfo(userResponse)
    user.setRepositories(userRepositories)
    user.setMessage('')
    
  }
  renderRepositories(user)
  renderUser(user)
}