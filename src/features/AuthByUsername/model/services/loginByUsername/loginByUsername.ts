import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema"
import { userActions } from "entities/User"
import { AuthRespounce } from "shared/api/types/AuthRespounce"
import { saveTokenToApi } from "../../../../../shared/api/saveTokenToApi/saveTokenToApi"

interface loginByUsernameDTO {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  void,
  loginByUsernameDTO,
  ThunkConfig<string>
>(
  "AuthByUsername/loginByUsername",
  async ({ password, username }, thunkAPI) => {
    if (!password || !username) return thunkAPI.rejectWithValue("unknownError")

    const body = { password, username }
    try {
      const { data } = await thunkAPI.extra.api.post<AuthRespounce>(
        "/api/auth/login",
        body
      )
      const { user, token } = data

      thunkAPI.dispatch(
        userActions.setAuthData({
          email: user.email,
          id: user.id,
          username: user.username,
          avatar: user.avatar || undefined,
        })
      )
      saveTokenToApi(thunkAPI.extra.api, token)

      return
    } catch (error: any) {
      console.log(error)
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error?.message || "unknownError"
      )
    }
  }
)
