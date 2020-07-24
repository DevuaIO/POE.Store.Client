import axios from "axios"
import environment from "./environment"

const api = axios.create({
  baseURL: environment.production
    ? "https://heroku.com"
    : "http://localhost:3001",
})

export function renewToken(token) {
  if (token) {
    token.cancel()
  }

  return axios.CancelToken.source()
}

export default api
