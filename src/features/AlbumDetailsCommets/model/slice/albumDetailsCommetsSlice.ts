import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { CommentModel } from "@/entities/Comment"
import { fetchCommentsByAlbumId } from "../services/fetchCommentsByAlbumId"
import { AlbumDetailsCommetsSchema } from "../types/AlbumDetailsCommetsSchema"

export const commentsAdapter = createEntityAdapter<CommentModel>({
  selectId: (comment) => comment.id,
})

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsComments",
  initialState: commentsAdapter.getInitialState<AlbumDetailsCommetsSchema>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {
    addOne: (state, action: PayloadAction<CommentModel>) => {
      commentsAdapter.addOne(state, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByAlbumId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByAlbumId.fulfilled, (state, action) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByAlbumId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: albumDetailsCommentsReducer } =
  articleDetailsCommentsSlice
export const { actions: albumDetailsCommentsActions } =
  articleDetailsCommentsSlice
