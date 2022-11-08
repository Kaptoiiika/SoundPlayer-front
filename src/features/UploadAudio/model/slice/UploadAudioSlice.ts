import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UploadAudioToServer } from "../services/UploadAudioToServer/UploadAudioToServer"
import {
  UploadAudioFile,
  UploadAudioFormSchema,
} from "../types/UploadAudioFormSchema"

export const uploadAudioInitialState: UploadAudioFormSchema = {
  name: "",
  isloading: false,
  audioIsLoaded: false,
}

export const uploadAudioSlice = createSlice({
  name: "profile",
  initialState: uploadAudioInitialState,
  reducers: {
    setAudioName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },

    setAudioFile: (state, action: PayloadAction<UploadAudioFile>) => {
      state.audio = action.payload
      state.audioIsLoaded = true
    },

    setValidationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UploadAudioToServer.pending, (state) => {
        state.isloading = true
      })
      .addCase(UploadAudioToServer.fulfilled, (state) => {
        state.isloading = false
        state.error = undefined
      })
      .addCase(UploadAudioToServer.rejected, (state, action) => {
        state.isloading = false
        state.error = action.payload
      })
  },
})

export const { actions: uploadAudioActions } = uploadAudioSlice
export const { reducer: uploadAudioReducer } = uploadAudioSlice
