import { createSlice } from "@reduxjs/toolkit"
import { fetchProfileDataById } from "../services/fetchProfileData/fetchProfileDataById"
import { ProfileSchema } from "../types/profileSchema"

const initialState: ProfileSchema = {
  profiles: {},
  isLoading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfileDataById.fulfilled, (state, action) => {
        if (action.payload.isMe) {
          state.profiles.me = action.payload.user
        } else {
          state.profiles[action.payload.user.id] = action.payload.user
        }
        state.isLoading = false
      })
      .addCase(fetchProfileDataById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProfileDataById.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
