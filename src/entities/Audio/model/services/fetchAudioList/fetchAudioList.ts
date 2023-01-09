import { createAsyncThunk } from "@reduxjs/toolkit"
import { RowsCountResponce } from "@/shared/api/apiTypes"
import { ThunkConfig } from "@/shared/config/storeConfig"
import { AudioModel } from "../../types/audioModel"
import { FormateAtributedAudio } from "../FormateAudio/FormateAtributesAudio"

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
    const { data } = await thunkAPI.extra.api.get<RowsCountResponce<any>>(
      "/api/audios",
      {
        params,
      }
    )

    const parsedData: AudioModel[] = data.rows.map((audio) => {
      return FormateAtributedAudio(audio)
    })

    return parsedData
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message || "unknownError")
  }
})
