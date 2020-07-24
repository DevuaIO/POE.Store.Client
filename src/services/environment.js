const production = process.env.NODE_ENV === "production"
const development = !production

const environment = { production, development }

export default environment
