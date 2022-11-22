import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { AlbumModel } from "../../types/AlbumSchema"
import { AlbumResounce } from "./AlbumResounce"

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
    const respounce = await extra.api.get<AlbumResounce>(
      `/api/albums/${albumId}`,
      {
        params,
      }
    )
    const data = respounce.data.data

    const parsedAlbums: AlbumModel = {
      id: data.id,
      title: data.attributes.title,
      image: data.attributes.image?.data
        ? {
          ...data.attributes.image.data.attributes,
          id: data.attributes.image.data.id,
        }
        : undefined,
      author: data.attributes.author?.data
        ? {
          ...data.attributes.author.data.attributes,
          id: data.attributes.author.data.id,
        }
        : undefined,
      audioList: data.attributes.audioList.data.map((audio) => ({
        ...audio.attributes,
        id: audio.id,
        author: {
          ...audio.attributes.author.data.attributes,
          id: audio.attributes.author.data.id,
          avatar: undefined,
        },
        audioFile: {
          ...audio.attributes.audioFile.data.attributes.audioFile,
          id: audio.attributes.audioFile.data.id,
        },
      })),
    }

    return parsedAlbums
  } catch (e) {
    return rejectWithValue(FormateError(e))
  }
})
