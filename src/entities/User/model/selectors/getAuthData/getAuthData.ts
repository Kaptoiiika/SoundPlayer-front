import { StateSchema } from "app/providers/StoreProvider"

export const getAuthData = (state: StateSchema) =>
  state.user.authData || undefined

export const getAuthIsInited = (state: StateSchema) =>
  state.user.isInited
