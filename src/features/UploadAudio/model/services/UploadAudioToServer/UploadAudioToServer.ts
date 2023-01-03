import { createAsyncThunk } from "@reduxjs/toolkit"
import { AudioModel } from "entities/Audio"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { ThunkConfig } from "shared/config/storeConfig"

interface UploadAudioDTO {
  name: string
  audio: Blob
}

export const UploadAudioToServer = createAsyncThunk<
  void,
  UploadAudioDTO,
  ThunkConfig<string>
>("audioForm/UploadAudioToServer", async ({ audio, name }, thunkAPI) => {
  const body = new FormData()
  body.append("name", name)
  body.append("audio", audio)
  try {
    await thunkAPI.extra.api.post<AudioModel>(
      "/api/uploads/audio",
      body
    )

    return
  } catch (error: any) {
    return thunkAPI.rejectWithValue(FormateError(error)
    )
  }
})
