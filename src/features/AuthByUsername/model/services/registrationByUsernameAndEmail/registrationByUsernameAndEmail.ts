import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema"
import { userActions } from "entities/User"
import { AuthRespounce } from "shared/api/types/AuthRespounce"
import { saveTokenToApi } from "../../../../../shared/api/saveTokenToApi/saveTokenToApi"

interface registrationByUsernameDTO {
  username: string
  password: string
  email: string
}

export const registrationByUsername = createAsyncThunk<
  void,
  registrationByUsernameDTO,
  ThunkConfig<string>
>(
  "AuthByUsername/registrationByUsername",
  async ({ password, username, email }, thunkAPI) => {
    if (!password || !username || !email)
      return thunkAPI.rejectWithValue("unknownError")

    const body = { password, username, email }
    try {
      const { data } = await thunkAPI.extra.api.post<AuthRespounce>(
        "/api/auth/registration",
        body
      )
      const { token, user } = data

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
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error?.message || "unknownError"
      )
    }
  }
)
