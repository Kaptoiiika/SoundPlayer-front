import { FormateAtributedUser } from "entities/User"
import { AudioModel } from "../../types/audioModel"

export const FormateAtributedAudio = (audio: any): AudioModel => {
  return {
    ...audio.attributes,
    id: audio.id,
    title: audio.attributes.title,
    duratation: audio.attributes.duratation,
    author: FormateAtributedUser(audio.attributes.author),
    audioFile: {
      ...audio.attributes.audioFile.data.attributes,
      id: audio.attributes.audioFile.data.id,
    },
  }
}
