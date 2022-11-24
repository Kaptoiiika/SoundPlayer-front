import { UserModel } from "entities/User"
import { FileRespounce } from "shared/api/types/FilteTypes"

export interface AudioModel {
  id: number

  title: string

  size: number

  duratation: number

  peaks?: number[]

  audioFile: FileRespounce

  author?: UserModel
}
