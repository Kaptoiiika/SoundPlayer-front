import { createSlice } from "@reduxjs/toolkit"
import { UpdateProfileAvatar } from "../services/UpdateProfileAvatar/UpdateProfileAvatar"
import { ProfileSchema } from "../types/profileSchema"

const initialState: ProfileSchema = {
  isLoading: false,
  uploadAvatarIsLoading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(UpdateProfileAvatar.pending, (state) => {
        state.uploadAvatarIsLoading = true
      })
      .addCase(UpdateProfileAvatar.fulfilled, (state) => {
        state.uploadAvatarIsLoading = false
      })
      .addCase(UpdateProfileAvatar.rejected, (state) => {
        state.uploadAvatarIsLoading = false
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
