import { createSlice } from "@reduxjs/toolkit"
import { AudioSchema } from "../types/audioSchema"

const initialState: AudioSchema = {
  name: "asd",
}

export const audioSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {
    changeName: (state) => {
      state.name = state.name + "1"
    },
    clearName: (state) => {
      state.name = ""
    },
  },
})

export const { actions: audioActions, reducer: audioReducer } = audioSlice
