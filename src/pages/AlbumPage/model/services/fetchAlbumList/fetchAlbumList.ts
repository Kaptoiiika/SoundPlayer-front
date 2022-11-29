import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { FormateAtributedAlbum } from "entities/Album/model/services/FormateAlbum/FormateAtributedAlbum"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { PaginationResponse } from "shared/api/types/PaginationResponse"
import { getAlbumPageLimit } from "../../selectors/albumPageSelectors"

type fetchAlbumListParams = {
  page?: number
}

export const fetchAlbumList = createAsyncThunk<
  PaginationResponse<AlbumModel[]>, // return value
  fetchAlbumListParams, // params
  ThunkConfig<string>
>("albumPage/fetchAlbumList", async (props, thunkApi) => {
  const { page } = props
  const limit = getAlbumPageLimit(thunkApi.getState())
  try {
    const params = {
      "populate[1]": "author",
      "populate[2]": "image",
      "pagination[page]": page,
      "pagination[pageSize]": limit,
    }

    const { data } = await thunkApi.extra.api.get<PaginationResponse<any>>(
      `/api/albums`,
      { params }
    )
    const rawAlbums = data.data
    const meta = data.meta

    const parsedAlbums: AlbumModel[] = rawAlbums.map((album: any) =>
      FormateAtributedAlbum(album)
    )

    return { data: parsedAlbums, meta: meta }
  } catch (e) {
    return thunkApi.rejectWithValue(FormateError(e))
  }
})
