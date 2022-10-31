import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { audioSlice } from "entities/Audio/model/slice/audioSlice"
import { AudioModel } from "entities/Audio/model/types/audioSchema"

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
      audioSlice.actions.addAudioToList({
        id,
        name,
        size,
        authorId,
        duratation,
        fileName,
        peaks,
      })
    )

    return
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message || "unknownError")
  }
})
