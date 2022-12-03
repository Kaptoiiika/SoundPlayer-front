import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { FileRespounce } from "shared/api/types/FilteTypes"

export const uploadAlbumAvatar = createAsyncThunk<
  FileRespounce, // return value
  Blob, // params
  ThunkConfig<string>
>("editableAlbum/uploadAlbumAvatar", async (avatar, thunkApi) => {
  try {
    const body = new FormData()
    body.append("files", avatar)
    const { data } = await thunkApi.extra.api.post<FileRespounce[]>("/api/upload", body)
    const result = data[0]

    return result
  } catch (e) {
    return thunkApi.rejectWithValue(FormateError(e))
  }
})
