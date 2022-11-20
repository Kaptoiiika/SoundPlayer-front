import { AudioModel } from "entities/Audio"

export enum AlbumType {
  SINGLE = "single",
}

export interface AlbumModel {
  title: string
  authorId: number
  id: number
  image: string
  trackList: AudioModel[]
  type?: AlbumType
}

export interface AlbumSchema {
  album?: AlbumModel

  isLoading: boolean
  error?: string
}
