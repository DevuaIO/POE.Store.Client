import axios from "axios"

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://heroku.com"
      : "http://localhost:3001",
})

export default api
