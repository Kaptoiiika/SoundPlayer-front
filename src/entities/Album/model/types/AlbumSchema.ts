import { AudioModel } from "entities/Audio"
import { UserModel } from "entities/User"
import { FileRespounce } from "shared/api/types/FilteTypes"

export enum AlbumType {
  SINGLE = "single",
}

export interface AlbumModel {
  id: number
  title: string
  audioList: AudioModel[]
  image?: FileRespounce
  author?: UserModel
  type?: AlbumType
}

export interface AlbumSchema {
  albums: Record<string, AlbumModel>
  isLoading: boolean

  error?: string
}
