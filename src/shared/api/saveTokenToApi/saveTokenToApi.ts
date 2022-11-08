import { AxiosInstance } from "axios"
import { localstorageKeys } from "shared/lib/localstorageKeys/localstorageKeys"

export const saveTokenToApi = (api: AxiosInstance, token: string) => {
  const BearerTokken = token.includes("Bearer") ? token : `Bearer ${token}`
  localStorage.setItem(localstorageKeys.TOKEN, BearerTokken)
  api.defaults.headers.common["Authorization"] = BearerTokken
}
