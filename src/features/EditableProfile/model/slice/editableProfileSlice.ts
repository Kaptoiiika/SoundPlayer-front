import { createSlice } from "@reduxjs/toolkit"
import { UpdateProfileAvatar } from "../services/UpdateProfileAvatar/UpdateProfileAvatar"
import { EditableProfileSchema } from "../types/editableProfileSchema"

const initialState: EditableProfileSchema = {
  isLoading: false,
}

const editableProfileSlice = createSlice({
  name: "editableProfileSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(UpdateProfileAvatar.pending, (state) => {
        state.isLoading = true
      })
      .addCase(UpdateProfileAvatar.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(UpdateProfileAvatar.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { actions: editableProfileActions } = editableProfileSlice
export const { reducer: editableProfileReducer } = editableProfileSlice
