import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AudioModel } from "entities/Audio/model/types/audioModel"
import { AudioPlayerSchema } from "../types/audioPlayerSchema"

const audioPlayer = new Audio()

const initialState: AudioPlayerSchema = {
  audioPlayer: {},
}

const audioPlayerSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {
    setCurrentAudio: (state, action: PayloadAction<AudioModel>) => {
      state.audioPlayer.currentAudio = action.payload
      audioPlayer.src = `${__API_URL__}api/uploads/audio/${action.payload.fileName}`
    },
  },
})

export const { actions: audioPlayerActions } = audioPlayerSlice
export const { reducer: audioPlayerReducer } = audioPlayerSlice
