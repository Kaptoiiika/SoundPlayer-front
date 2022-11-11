import { StateSchema } from "app/providers/StoreProvider"

export const getAudioPlayerData = (state: StateSchema) => state.audioPlayer

export const getAudioPlayerCurrentAudio = (state: StateSchema) =>
  state.audioPlayer?.currentAudio

export const getAudioPlayerVolume = (state: StateSchema) =>
  state.audioPlayer?.volume || 0

export const getAudioPlayerCurrentTime = (state: StateSchema) =>
  state.audioPlayer?.currentTime || 0

export const getAudioPlayerCurrentDuration = (state: StateSchema) =>
  state.audioPlayer?.currentAudio?.duratation || 0

export const getAudioPlayerIsPlaying = (state: StateSchema) =>
  state.audioPlayer?.isPlaying || false
