import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchAudioList } from "../services/fetchAudioList/fetchAudioList"
import { AudioModel } from "../types/audioModel"
import { AudioSchema } from "../types/audioSchema"

const initialState: AudioSchema = {
  list: [],
  isLoading: false,
  isInitial: false,
}

const audioSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    addAudioToList: (state, action: PayloadAction<AudioModel>) => {
      state.list.push(action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAudioList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAudioList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isInitial = true
        state.list = action.payload
      })
      .addCase(fetchAudioList.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { actions: audioActions } = audioSlice
export const { reducer: audioReducer } = audioSlice
