import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { audioReducer } from "entities/Audio"
import { createReducerManager } from "./ReducerManager"
import { StateSchema } from "./StateSchema"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    audio: audioReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    //@ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  //@ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore["dispatch"]
