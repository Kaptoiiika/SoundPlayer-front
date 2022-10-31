import { AudioSchema } from "entities/Audio"
import { UploadAudioFormSchema } from "features/UploadAudio"

export interface StateSchema {
  audio: AudioSchema
  audioForm: UploadAudioFormSchema
}
