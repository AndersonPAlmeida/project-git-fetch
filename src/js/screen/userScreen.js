const containerUserProfile = document.querySelector('.userProfile')

export function renderUser(user) {
  let userInfo = ''
  
  if(user.message === 'Not Found') {
    userInfo = `<h2 class="errorSearch">Usuário não cadastrado no github.</h2>`
  } else {
    userInfo = `<figure>
                  <img src="${user.avatarUrl}" alt="Foto de perfil no github"/>
                </figure>
                <div class="profileInformarion">
                  <p class="name">${user.name ?? "Nome não cadastrado"}</p>
                  <p class="login">${user.userName ?? "Login não cadastrado"}</p>
                  <p class="bio">${user.bio ?? "Bio não cadastrada"}</p>
                  <div class="networking">
                    <p class="followers">Seguidores - ${user.followers ?? 0}</p>
                    <p class="following">Seguindo - ${user.following ?? 0}</p>
                  </div>
                </div>
                `
  }
  
  containerUserProfile.innerHTML = userInfo
  containerUserProfile.classList.remove('hidden')
}