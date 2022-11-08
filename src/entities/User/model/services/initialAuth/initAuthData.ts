import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { saveTokenToApi } from "shared/api/saveTokenToApi/saveTokenToApi"
import { localstorageKeys } from "shared/lib/localstorageKeys/localstorageKeys"
import { UserModel } from "../../types/userSchema"

export const initalAuthData = createAsyncThunk<
  UserModel,
  void,
  ThunkConfig<string>
>("user/initalAuthData", async (dto, thunkAPI) => {
  const token = localStorage.getItem(localstorageKeys.TOKEN)
  if (!token) return thunkAPI.rejectWithValue("auth not found")

  try {
    const { data } = await thunkAPI.extra.api.get<UserModel>("/api/auth", {
      headers: { Authorization: token },
    })

    saveTokenToApi(thunkAPI.extra.api, token)

    return {
      id: data.id,
      username: data.username,
      email: data.email,
      avatar: data.avatar || undefined,
    }
  } catch (error: any) {
    localStorage.removeItem(localstorageKeys.TOKEN)
    return thunkAPI.rejectWithValue("auth is rejected")
  }
})
