import { createAsyncThunk } from "@reduxjs/toolkit"
import { FormateError } from "@/shared/api/Errors/FormateError/FormateError"
import { ThunkConfig } from "@/shared/config/storeConfig"
import { AlbumModel } from "../../types/AlbumSchema"
import { FormateAtributedAlbum } from "../FormateAlbum/FormateAtributedAlbum"
import { AlbumRespounce } from "./AlbumRespounce"

type fetchAlbumByIdProps = { id: string; replace?: boolean }

export const fetchAlbumById = createAsyncThunk<
  AlbumModel,
  fetchAlbumByIdProps,
  ThunkConfig<string>
>("albumDetails/fetchAlbumById", async (props, thunkApi) => {
  const { id: albumId, replace } = props
  const { extra, rejectWithValue } = thunkApi

  const album = thunkApi.getState().albumDetails?.albums[albumId]
  if (album && !replace) return album

  try {
    const params = {
      ["populate[0]"]: "audioList.audioFile,audioList.author",
      ["populate[1]"]: "author",
      ["populate[2]"]: "image",
    }
    const respounce = await extra.api.get<AlbumRespounce>(
      `/api/albums/${albumId}`,
      {
        params,
      }
    )
    const data = respounce.data.data

    const parsedAlbums: AlbumModel = FormateAtributedAlbum(data)

    return parsedAlbums
  } catch (e) {
    return rejectWithValue(FormateError(e))
  }
})
