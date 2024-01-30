import { base_url } from "./variablesServices.js";

export async function getEventServices(nameUser) {
  const response = await fetch(`${base_url}/${nameUser}/events?event_type=PullRequestEvent`) 
  const data = await response.json()

  if(data.message === 'Not Found') {
    containerEvents.classList.add('hidden')
    return {message: 'Not Found'}
  }
  const filteredEvents = data.filter(event => event.type === "CreateEvent" || event.type === "PushEvent").slice(0, 10)

  return filteredEvents
}