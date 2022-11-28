import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { FormateAtributedAudio } from "entities/Audio"
import { FormateAtributedUser } from "entities/User"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { AlbumModel } from "../../types/AlbumSchema"
import { FormateAtributedAlbum } from "../FormateAlbum/FormateAtributedAlbum"
import { AlbumRespounce } from "./AlbumRespounce"

export const fetchAlbumById = createAsyncThunk<
  AlbumModel,
  string,
  ThunkConfig<string>
>("albumDetails/fetchAlbumById", async (albumId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  const album = thunkApi.getState().albumDetails?.albums[albumId]
  if (album) return album

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
