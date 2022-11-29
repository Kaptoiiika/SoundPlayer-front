import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ScrollSaverSchema } from "../types/ScrollSaverSchema"

const initialState: ScrollSaverSchema = {
  scroll: {},
}

const scrollSaverSlice = createSlice({
  name: "scrollSaverSlice",
  initialState: initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[action.payload.path] = action.payload.position
    },
  },
})

export const { actions: scrollSaverActions } = scrollSaverSlice
export const { reducer: scrollSaverReducer } = scrollSaverSlice
