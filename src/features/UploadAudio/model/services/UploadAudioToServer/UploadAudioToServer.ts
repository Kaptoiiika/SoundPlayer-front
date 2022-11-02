import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { audioActions, AudioModel } from "entities/Audio"

interface UploadAudioDTO {
  name: string
  audio: Blob
}

export const UploadAudioToServer = createAsyncThunk<
  void,
  UploadAudioDTO,
  { rejectValue: string }
>("audio/UploadAudioToServer", async ({ audio, name }, thunkAPI) => {
  const body = new FormData()
  body.append("name", name)
  body.append("audio", audio)
  try {
    const { data } = await axios.post<AudioModel>("/api/uploads/audio", body)
    const { id, name, size, authorId, duratation, fileName, peaks } = data

    thunkAPI.dispatch(
      audioActions.addAudioToList({
        id,
        peaks,
        name: name || "",
        size: size || 0,
        duratation: duratation || 0,
        authorId: authorId || undefined,
        fileName: fileName || undefined,
      })
    )

    return
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message || "unknownError")
  }
})
