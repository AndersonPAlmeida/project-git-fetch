export const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  message: '',
  repositories: [],
  setMessage(message) {
    this.message = message;
  },
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
  },
  setRepositories(gitRepositories) {
    this.repositories = gitRepositories
  }
}