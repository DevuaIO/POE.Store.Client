import api from "./axios"

export async function findAll() {
  try {
    const response = await api.get("/hideouts")
    if (response.data?.success) {
      return response.data.content
    }

    console.log(`[HIDEOUTS_SERVICE]: ${response.data?.error}`)
    return []
  } catch (error) {
    console.log(`[HIDEOUTS_SERVICE]: ${error.message}`)
    return []
  }
}
