import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { audioReducer } from "entities/Audio"
import { uploadAudioReducer } from "features/UploadAudio"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    audio: audioReducer,
    audioForm: uploadAudioReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore["dispatch"]
