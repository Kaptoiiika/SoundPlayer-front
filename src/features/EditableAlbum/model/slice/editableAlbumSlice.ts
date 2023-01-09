import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AlbumModel } from "@/entities/Album"
import { saveAlbumChanges } from "../services/saveAlbumChanges"
import { uploadAlbumAvatar } from "../services/uploadAlbumAvatar"
import { EditableAlbumSchema } from "../types/editableAlbumSchema"

export const editableAlbumInitial: EditableAlbumSchema = {
  title: "",
  image: undefined,
  isloading: false,
}

export const editableAlbumSlice = createSlice({
  name: "editableAlbum",
  initialState: editableAlbumInitial,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    initAlbum: (state, action: PayloadAction<AlbumModel | undefined>) => {
      state.selectedAlbum = action.payload
      state.title = action.payload?.title ?? ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadAlbumAvatar.pending, (state) => {
        state.isloading = true
      })
      .addCase(uploadAlbumAvatar.fulfilled, (state, action) => {
        state.isloading = false
        state.image = action.payload
      })
      .addCase(uploadAlbumAvatar.rejected, (state, action) => {
        state.isloading = false
        state.error = action.payload
      })
      .addCase(saveAlbumChanges.pending, (state) => {
        state.isloading = true
      })
      .addCase(saveAlbumChanges.fulfilled, (state) => {
        state.isloading = false
        state.error = undefined
      })
      .addCase(saveAlbumChanges.rejected, (state, action) => {
        state.isloading = false
        state.error = action.payload
      })
  },
})

export const { actions: editableAlbumActions } = editableAlbumSlice
export const { reducer: editableAlbumReducer } = editableAlbumSlice
