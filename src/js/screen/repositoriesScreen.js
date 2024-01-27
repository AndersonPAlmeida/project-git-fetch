const containerRepositories = document.querySelector('.repositories')
const listRepositories = document.querySelector('.list')

export function renderRepositories(user) {
  let repositoriesList = ''
  
  if(user.message === 'Not Found') {
    containerRepositories.classList.add('hidden')
  }

  else {
    if(user.repositories.length === 0) {
      repositoriesList = `<h3>Usuário não tem repositórios no github.</h3>`
    } 
    
    user.repositories.forEach((repositor) => {
      repositoriesList += `<li class="repositor">
                        <a href="${repositor.html_url}" target="_blank">${repositor.name}</a>
                      </li>
                      `
    })
    
    listRepositories.innerHTML = repositoriesList
    containerRepositories.classList.remove('hidden')
  }
}