import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema"
import { UserModel } from "entities/User/model/types/userSchema"

interface loginByUsernameDTO {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  void,
  loginByUsernameDTO,
  ThunkConfig<string>
>("AuthByUsername/loginByUsername", async ({ password, username }, thunkAPI) => {
  if (password || username) return thunkAPI.rejectWithValue("unknownError")

  const body = { password, username }
  try {
    const { data } = await thunkAPI.extra.api.post<UserModel>(
      "/api/uploads/audio",
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
})
