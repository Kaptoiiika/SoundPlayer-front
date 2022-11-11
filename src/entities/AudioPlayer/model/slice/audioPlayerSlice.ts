import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AudioModel } from "entities/Audio/model/types/audioModel"
import { localstorageKeys } from "shared/const/localstorageKeys/localstorageKeys"
import { AudioPlayerSchema } from "../types/audioPlayerSchema"

const initialState: AudioPlayerSchema = {
  volume: Number(localStorage.getItem(localstorageKeys.PLAYER_VOLUME)) || 0.5,
  currentTime: 0,
  isPlaying: false,
}

const audioPlayerSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {
    setCurrentAudio: (state, action: PayloadAction<AudioModel>) => {
      state.currentAudio = action.payload
    },

    playCurrentAudio: (state) => {
      state.isPlaying = true
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      const volume = Math.max(Math.min(action.payload, 1), 0)
      state.volume = volume
      localStorage.setItem(localstorageKeys.PLAYER_VOLUME, volume.toString())
    },
  },
})

export const { actions: audioPlayerActions } = audioPlayerSlice
export const { reducer: audioPlayerReducer } = audioPlayerSlice
