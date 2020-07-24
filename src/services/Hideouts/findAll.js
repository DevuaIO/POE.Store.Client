import api, { renewToken } from "../axios"
import environment from "../environment"

let HIDEOUT_FINDALL_CT = null

export default async function () {
  HIDEOUT_FINDALL_CT = renewToken(HIDEOUT_FINDALL_CT)

  try {
    const response = await api.get("/hideouts", {
      cancelToken: HIDEOUT_FINDALL_CT.token,
    })
    if (response.data?.success) {
      return response.data.content
    }

    if (environment.development) {
      console.log(`[HIDEOUTS_SERVICE](findAll): ${response.data?.error}`)
    }
    return []
  } catch (error) {
    if (environment.development) {
      console.log(`[HIDEOUTS_SERVICE](findAll): ${error.message}`)
    }
    return []
  }
}
