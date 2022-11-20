import { createSlice } from "@reduxjs/toolkit"
import { ProfileSchema } from "../types/profileSchema"

const initialState: ProfileSchema = {
  isLoading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
