import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginByUsername } from "../services/loginByUsername/loginByUsername"
import { AuthByUsernameSchema } from "../types/AuthByUserNameSchema"

export const AuthByUsernameSlice: AuthByUsernameSchema = {
  username: "",
  password: "",
  email: "",

  isloading: false,
}

export const authByUsernameSlice = createSlice({
  name: "audio",
  initialState: AuthByUsernameSlice,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.isloading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isloading = false
        state.error = undefined
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isloading = false
        state.error = action.payload
      })
  },
})

export const { actions: uploadAudioActions } = authByUsernameSlice
export const { reducer: uploadAudioReducer } = authByUsernameSlice
