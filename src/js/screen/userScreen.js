import { containerUserProfile } from "./variablesScreen.js"

export function renderUser(user) {
  containerUserProfile.innerHTML = `<figure>
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
                                    
  containerUserProfile.classList.remove('hidden')
}