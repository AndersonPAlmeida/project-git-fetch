export const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  message: '',
  followers: 0,
  following: 0,
  repositories: [],
  events: [],
  setMessage(message) {
    this.message = message;
  },
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.followers = gitHubUser.followers,
    this.following = gitHubUser.following
  },
  setRepositories(gitRepositories) {
    this.repositories = gitRepositories
  },
  setEvents(gitEvents) {
    this.events = gitEvents
  },
}