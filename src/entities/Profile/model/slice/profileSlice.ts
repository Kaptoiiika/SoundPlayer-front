import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: AudioSchema = {
  list: [],
  isLoading: false,
  isInitial: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    changeName: (state) => {
      state.list.push({ id: 24, name: "asd", size: 213 })
    },
    clearName: (state) => {
      state.list = []
    },
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

export const { actions: audioActions } = profileSlice
export const { reducer: audioReducer } = profileSlice
