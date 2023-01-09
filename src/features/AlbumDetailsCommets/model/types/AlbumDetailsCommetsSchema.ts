import { EntityState } from "@reduxjs/toolkit"
import { CommentModel } from "@/entities/Comment"

export interface AlbumDetailsCommetsSchema extends EntityState<CommentModel> {
  isLoading: boolean
  error?: string
}
