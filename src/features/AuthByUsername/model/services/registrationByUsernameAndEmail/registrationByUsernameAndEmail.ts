import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema"
import { UserModel } from "entities/User/model/types/userSchema"

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
    if (password || username || email)
      return thunkAPI.rejectWithValue("unknownError")

    const body = { password, username }
    try {
      const { data } = await thunkAPI.extra.api.post<UserModel>(
        "/api/auth/audio",
        body
      )
      const { username } = data

      // thunkAPI.dispatch(
      //   audioActions.addAudioToList({
      //     id,
      //     peaks,
      //     name: name || "",
      //     size: size || 0,
      //     duratation: duratation || 0,
      //     authorId: authorId || undefined,
      //     fileName: fileName || undefined,
      //   })
      // )

      return
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "unknownError")
    }
  }
)
