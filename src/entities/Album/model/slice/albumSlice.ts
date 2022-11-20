import { createSlice } from "@reduxjs/toolkit"
import { AlbumSchema } from "../types/AlbumSchema"

const initialState: AlbumSchema = {
  isLoading: false,
}

const albumSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {

  },
})

export const { actions: albumActions } = albumSlice
export const { reducer: albumReducer } = albumSlice
