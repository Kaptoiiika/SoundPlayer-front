import { configureStore } from "@reduxjs/toolkit"
import { audioReducer } from "entities/Audio"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      audio: audioReducer,
    },
    devTools: __IS_DEV__,
  })
}
