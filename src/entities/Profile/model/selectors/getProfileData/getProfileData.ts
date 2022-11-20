import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

export const getProfileData = (state: StateSchema) => state.profile

export const getUploadAvatarIsLoading = (state: StateSchema) =>
  state.profile?.uploadAvatarIsLoading
