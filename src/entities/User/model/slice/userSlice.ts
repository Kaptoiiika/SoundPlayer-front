import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { localstorageKeys } from "shared/const/localstorageKeys/localstorageKeys"
import { initalAuthData } from "../services/initialAuth/initAuthData"
import { UserModel, UserSchema } from "../types/userSchema"

const initialState: UserSchema = {
  authData: undefined,
  isInited: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserModel>) => {
      state.authData = action.payload
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(localstorageKeys.TOKEN)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(initalAuthData.fulfilled, (state, action) => {
        state.authData = action.payload
        state.isInited = true
      })
      .addCase(initalAuthData.rejected, (state) => {
        state.isInited = true
      })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
