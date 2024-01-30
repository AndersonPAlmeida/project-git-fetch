import { containerEvents, listEvents } from "./variablesScreen.js"

export function renderEvent(user) {
  let eventsList = ''

  if(user.events.length === 0) {
    eventsList = `<h3>Usuário não tem eventos no github.</h3>`
  } 
  
  user.events.forEach((event) => {
    if(event.type === 'CreateEvent') {
      eventsList += ` <li class="event">
                        <strong>${event.repo.name}</strong> - ${event.payload.description}
                      </li>
                    `
    } else if(event.type === 'PushEvent') {
      let commits = ''
      event.payload.commits.forEach((commit) => {
        commits += (commit.message)
      })

      eventsList += ` <li class="event">
                        <strong>${event.repo.name}</strong> - ${event.payload.commits[0].message}
                      </li>
                    `
    }      
  })
  
  listEvents.innerHTML = eventsList
  containerEvents.classList.remove('hidden')
}