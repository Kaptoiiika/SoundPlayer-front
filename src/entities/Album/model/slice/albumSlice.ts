import { createSlice } from "@reduxjs/toolkit"
import { fetchAlbumById } from "../services/fetchAlbumById/fetchAlbumById"
import { AlbumSchema } from "../types/AlbumSchema"

const initialState: AlbumSchema = {
  isLoading: false,
  albums: {},
}

const albumSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAlbumById.fulfilled, (state, action) => {
        state.albums[action.payload.id] = action.payload
        state.isLoading = false
      })
      .addCase(fetchAlbumById.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(fetchAlbumById.pending, (state) => {
        state.isLoading = true
      })
  },
})

export const { actions: albumActions } = albumSlice
export const { reducer: albumReducer } = albumSlice
