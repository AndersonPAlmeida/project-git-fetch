import { containerUserProfile, containerRepositories, 
  listRepositories, containerEvents, listEvents }
from "./variablesScreen.js"

export function renderError(user) {
containerUserProfile.innerHTML = `<h2 class="errorSearch">Usuário não cadastrado no github.</h2>`

containerUserProfile.classList.remove('hidden')
listRepositories.innerHTML = ''
containerRepositories.classList.add('hidden')
listEvents.innerHTML = ''
containerEvents.classList.add('hidden')
}