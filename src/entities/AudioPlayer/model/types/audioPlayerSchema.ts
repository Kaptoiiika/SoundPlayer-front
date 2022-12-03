import { AudioModel } from "entities/Audio/model/types/audioModel"

export interface AudioPlayerModel {
  currentAudio?: AudioModel
  volume: number
}

export interface AudioPlayerSchema {
  currentAudio?: AudioModel
  currentPlayList: AudioModel[]

  volume: number
  currentTime: number
  duratation: number
  changedTime: number
  isPlaying: boolean
}
