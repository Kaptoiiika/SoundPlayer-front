import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { audioReducer } from "entities/Audio"
import { apiClient } from "shared/api/apiClient"
import { createReducerManager } from "./ReducerManager"
import { ReduxStoreWithManager, StateSchema, ThunkExtraArg } from "./StateSchema"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    audio: audioReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: apiClient,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  }) as ReduxStoreWithManager

  store.reducerManager = reducerManager

  return store
}

type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore["dispatch"]
