import { createSlice } from "@reduxjs/toolkit"
import { AudioSchema } from "../types/audioSchema"

const initialState: AudioSchema = { list: [] }

export const audioSlice = createSlice({
  name: "audio",
  initialState: initialState,
  reducers: {
    changeName: (state) => {
      state.list.push({ id: 24, name: "asd", size: 213 })
    },
    clearName: (state) => {
      state.list = []
    },
  },
})

export const { actions: audioActions, reducer: audioReducer } = audioSlice
