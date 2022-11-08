import { AxiosInstance } from "axios"
import { localstorageKeys } from "shared/lib/localstorageKeys/localstorageKeys"

export const saveTokenToApi = (api: AxiosInstance, token: string) => {
  const BearerTokken = `Bearer ${token}`
  localStorage.setItem(localstorageKeys.TOKEN, token)
  api.defaults.headers.common["Authorization"] = BearerTokken
}
