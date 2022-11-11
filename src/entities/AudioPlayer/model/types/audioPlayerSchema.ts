import { AudioModel } from "entities/Audio/model/types/audioModel"

export interface AudioPlayerModel {
  currentAudio?: AudioModel
  volume: number
}

export interface AudioPlayerSchema {
  currentAudio?: AudioModel
  volume: number
  currentTime: number
  isPlaying: boolean
}
