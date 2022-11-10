import { AudioModel } from "entities/Audio/model/types/audioModel"

export interface AudioPlayerModel {
  currentAudio?: AudioModel 
}

export interface AudioPlayerSchema {
  audioPlayer: AudioPlayerModel
}
