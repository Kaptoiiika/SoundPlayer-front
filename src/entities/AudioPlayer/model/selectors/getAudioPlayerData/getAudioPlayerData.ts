import { StateSchema } from "shared/config/storeConfig"

export const getAudioPlayerData = (state: StateSchema) => state.audioPlayer

export const getAudioPlayerCurrentAudio = (state: StateSchema) =>
  state.audioPlayer?.currentAudio

export const getAudioPlayerVolume = (state: StateSchema) =>
  state.audioPlayer?.volume ?? 0

export const getAudioPlayerCurrentTime = (state: StateSchema) =>
  state.audioPlayer?.currentTime ?? 0

export const getAudioChangedTime = (state: StateSchema) =>
  state.audioPlayer?.changedTime ?? 0

export const getAudioPlayerCurrentDuration = (state: StateSchema) =>
  state.audioPlayer?.duratation ?? 0

export const getAudioPlayerIsPlaying = (state: StateSchema) =>
  state.audioPlayer?.isPlaying || false
