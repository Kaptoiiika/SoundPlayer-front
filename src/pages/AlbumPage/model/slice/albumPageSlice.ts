import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { fetchAlbumList } from "../services/fetchAlbumList/fetchAlbumList"
import { AlbumPageSchema } from "../types/albumPageSchema"

export const albumListAdapter = createEntityAdapter<AlbumModel>({
  selectId: (album) => album.id,
})

const initialState: AlbumPageSchema = {
  isLoading: true,
  hasMany: true,
  limit: 25,
  page: 1,
  ids: [],
  entities: {},
}

export const albumPageSlice = createSlice({
  name: "albumPage",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAlbumList.fulfilled, (state, action) => {
        state.isLoading = false
        albumListAdapter.addMany(state, action.payload.data)
        if (
          action.payload.meta.pagination.page >=
          action.payload.meta.pagination.pageCount
        ) {
          state.hasMany = false
        }
      })
      .addCase(fetchAlbumList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchAlbumList.pending, (state) => {
        state.isLoading = true
      })
  },
})

export const { actions: albumPageActions } = albumPageSlice
export const { reducer: albumPageReducer } = albumPageSlice
