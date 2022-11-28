import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { fetchAlbumList } from "../services/fetchAlbumList/fetchAlbumList"
import { AlbumPageSchema } from "../types/albumPageSchema"

export const albumListAdapter = createEntityAdapter<AlbumModel>({
  selectId: (album) => album.id,
})

const initialState: AlbumPageSchema = {
  isLoading: true,
  ids: [],
  entities: {},
}

export const albumPageSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAlbumList.fulfilled, (state, action) => {
        state.isLoading = false
        albumListAdapter.setAll(state, action.payload)
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
