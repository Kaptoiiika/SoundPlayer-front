import { AudioModel } from "entities/Audio"
import { UserModel } from "entities/User"
import {
  DataRespounce,
  ManyDataRespounce,
} from "shared/api/types/DataRespounce"
import { FileRespounce } from "shared/api/types/FilteTypes"

export type AlbumRespounce = {
  data: {
    id: number
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      audioList: ManyDataRespounce<AlbumAudio>
      author?: DataRespounce<UserModel>
      image?: DataRespounce<FileRespounce>
    }
  }
  meta: {}
}

interface AlbumAudio extends Omit<AudioModel, "author" | "audioFile"> {
  author: DataRespounce<UserModel>
  audioFile: DataRespounce<AudioModel>
}
