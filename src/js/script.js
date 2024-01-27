const nameUser = document.querySelector('#nameUser')
const buttonSearch = document.querySelector('.buttonSearch')
const containerUserProfile = document.querySelector('.userProfile')
const listRepositories = document.querySelector('.list')

async function user(query) {
  const response = await fetch(query) 
  const data = await response.json()
  return data
}

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault()
  const query = `https://api.github.com/users/${nameUser.value}`
  
  user(query).then((userData) => {
    const userInfo = `<figure>
                        <img src="${userData.avatar_url}" alt="Foto de perfil no github"/>
                      </figure>
                      <div class="profileInformarion">
                        <p class="name">${userData.name ?? "Nome não cadastrado"}</p>
                        <p class="bio">${userData.bio ?? "Bio não cadastrada"}</p>
                      </div>
                    `
    containerUserProfile.innerHTML = userInfo
  })

  let repositories = ''
  const queryRepo = `https://api.github.com/users/${nameUser.value}/repos`
  user(queryRepo).then((repoData) => {
    console.log(repoData);
    repoData.forEach((repositor) => {
      repositories += `<li class="repositor">
                        <a href="${repositor.archive_url}" target="_blank">${repositor.name}</a>
                       </li>
                      `
    })
    listRepositories.innerHTML += repositories
  })
})