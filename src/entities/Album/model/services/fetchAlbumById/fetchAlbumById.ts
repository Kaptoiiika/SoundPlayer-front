import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AlbumModel } from "../../types/AlbumSchema"

export const fetchAlbumById = createAsyncThunk<
  AlbumModel,
  string,
  ThunkConfig<string>
>("albumDetails/fetchAlbumById", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<AlbumModel>(`/articles/${articleId}`)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error")
  }
})
