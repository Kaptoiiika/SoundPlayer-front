import { AlbumModel } from "@/entities/Album"
import { FileRespounce } from "@/shared/api/types/FilteTypes"

export interface EditableAlbumSchema {
  title: string
  isloading: boolean
  selectedAlbum?: AlbumModel
  image?: FileRespounce
  error?: string
}
