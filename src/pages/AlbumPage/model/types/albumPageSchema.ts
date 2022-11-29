import { EntityState } from "@reduxjs/toolkit"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"

export interface AlbumPageSchema extends EntityState<AlbumModel> {
  page: number
  limit: number
  isLoading: boolean
  hasMany:boolean
  error?: string
}
