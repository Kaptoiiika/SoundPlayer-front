import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AudioModel } from "entities/Audio"
import { RowsCountResponce } from "shared/api/apiTypes"

interface fetchAudioListDTO {
  page?: number
  limit?: number
}

export const fetchAudioList = createAsyncThunk<
  AudioModel[],
  fetchAudioListDTO,
  ThunkConfig<string>
>("audio/fetchAudioList", async (dto, thunkAPI) => {
  const { page = 0, limit = 10 } = dto
  const params = { page: page, limit: limit }

  try {
    const { data } = await thunkAPI.extra.api.get<
      RowsCountResponce<AudioModel>
    >("/api/audio", {
      params,
    })

    const parsedData: AudioModel[] = data.rows.map((audio) => {
      return {
        id: audio.id,
        peaks: audio.peaks,
        name: audio.name || "",
        size: audio.size || 0,
        duratation: audio.duratation || 0,
        authorId: audio.authorId || undefined,
        fileName: audio.fileName || undefined,
      }
    })

    return parsedData
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message || "unknownError")
  }
})
