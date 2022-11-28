import { EntityState } from "@reduxjs/toolkit"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"

export interface AlbumPageSchema extends EntityState<AlbumModel> {
  isLoading: boolean
  error?: string
}
