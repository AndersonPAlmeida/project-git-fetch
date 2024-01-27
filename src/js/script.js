import { getUserServices } from "./services/user.js"
import { getRepositoriesServices } from "./services/repositories.js"

const nameUser = document.querySelector('#nameUser')
const buttonSearch = document.querySelector('.buttonSearch')
const containerUserProfile = document.querySelector('.userProfile')
const containerRepositories = document.querySelector('.repositories')
const listRepositories = document.querySelector('.list')


buttonSearch.addEventListener('click', (event) => {
  event.preventDefault()
  
  getUser()
  getRepositories()
})

function getUser() {
  getUserServices(nameUser.value).then((userData) => {
    let userInfo = ''

    if(userData.message === 'Not Found') {
      userInfo = `<h2 class="errorSearch">Usuário não cadastrado no github.</h2>`
      containerRepositories.classList.add('hidden')
      containerUserProfile.innerHTML = userInfo
      containerUserProfile.classList.remove('hidden')
      return
    }
    else {
      userInfo = `<figure>
                      <img src="${userData.avatar_url}" alt="Foto de perfil no github"/>
                    </figure>
                    <div class="profileInformarion">
                      <p class="name">${userData.name ?? "Nome não cadastrado"}</p>
                      <p class="bio">${userData.bio ?? "Bio não cadastrada"}</p>
                    </div>
                  `
      containerUserProfile.innerHTML = userInfo
      containerUserProfile.classList.remove('hidden')
    }
  })
}

function getRepositories() {
  getRepositoriesServices(nameUser.value).then((repoData) => {
    console.log(repoData);
    let repositories = ''

    if (repoData.length === 0) {
      repositories = `<h3>Usuário não tem repositórios no github.</h3>`
    }
    
    repoData.forEach((repositor) => {
      repositories += `<li class="repositor">
                        <a href="${repositor.html_url}" target="_blank">${repositor.name}</a>
                       </li>
                      `
    })

    containerRepositories.classList.remove('hidden')
    listRepositories.innerHTML = repositories
  })
}