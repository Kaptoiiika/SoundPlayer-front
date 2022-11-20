import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

export const getProfileData = (state: StateSchema) => state.profile

export const getProfileDataById = (id: string) => (state: StateSchema) =>
  state.profile?.profiles[id]

export const getProfileIsloading = (state: StateSchema) =>
  state.profile?.isLoading
