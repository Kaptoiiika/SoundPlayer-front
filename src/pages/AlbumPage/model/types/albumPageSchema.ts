import { EntityState } from "@reduxjs/toolkit"
import { AlbumModel } from "entities/Album"
import { SortOrder } from "shared/types"

export interface AlbumPageSchema extends EntityState<AlbumModel> {
  isLoading: boolean
  hasMany: boolean
  error?: string

  // filters
  page: number
  limit: number
  order?: SortOrder
  search?: string
}
