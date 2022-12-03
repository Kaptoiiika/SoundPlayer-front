import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AudioModel } from "entities/Audio/model/types/audioModel"
import { localstorageKeys } from "shared/const/localstorageKeys/localstorageKeys"
import { AudioPlayerSchema } from "../types/audioPlayerSchema"

const initialState: AudioPlayerSchema = {
  currentPlayList: [],
  volume: Number(localStorage.getItem(localstorageKeys.PLAYER_VOLUME)) || 0.5,
  duratation: 0,
  currentTime: 0,
  changedTime: 0,
  isPlaying: false,
}

const audioPlayerSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {
    setCurrentAudio: (state, action: PayloadAction<AudioModel>) => {
      state.currentAudio = action.payload
    },
    setCurrentAudioAndPlay: (state, action: PayloadAction<AudioModel>) => {
      state.currentAudio = action.payload
      state.isPlaying = true
    },
    setPlayList: (state, action: PayloadAction<AudioModel[]>) => {
      state.currentPlayList = action.payload
    },

    playNext: (state) => {
      const currentIndex = state.currentPlayList.findIndex(
        (audio) => audio.id === state.currentAudio?.id
      )
      if (state.currentPlayList[currentIndex + 1])
        state.currentAudio = state.currentPlayList[currentIndex + 1]
    },

    playPrev: (state) => {
      const currentIndex = state.currentPlayList.findIndex(
        (audio) => audio.id === state.currentAudio?.id
      )
      if (currentIndex > 0)
        state.currentAudio = state.currentPlayList[currentIndex - 1]
    },

    stopCurrentAudio: (state) => {
      state.isPlaying = false
    },
    playCurrentAudio: (state) => {
      state.isPlaying = true
    },
    changeTime: (state, action: PayloadAction<number>) => {
      state.changedTime = action.payload
      state.currentTime = action.payload
    },
    setPlayerTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      const volume = Math.max(Math.min(action.payload, 1), 0)
      state.volume = volume
      localStorage.setItem(localstorageKeys.PLAYER_VOLUME, String(volume))
    },
    setDuratation: (state, action: PayloadAction<number>) => {
      state.duratation = action.payload
    },
  },
})

export const { actions: audioPlayerActions } = audioPlayerSlice
export const { reducer: audioPlayerReducer } = audioPlayerSlice
