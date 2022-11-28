import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { FormateAtributedAlbum } from "entities/Album/model/services/FormateAlbum/FormateAtributedAlbum"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"

export const fetchAlbumList = createAsyncThunk<
  AlbumModel[], // return value
  void, // params
  ThunkConfig<string>
>("albumPage/fetchAlbumList", async (params, thunkApi) => {
  try {
    const params = {
      "populate[1]": "author",
      "populate[2]": "image",
    }
    const { data } = await thunkApi.extra.api.get(`/api/albums`, { params })
    const rawAlbums = data.data

    const parsedAlbums: AlbumModel[] = rawAlbums.map((album: any) =>
      FormateAtributedAlbum(album)
    )

    return parsedAlbums
  } catch (e) {
    return thunkApi.rejectWithValue(FormateError(e))
  }
})
