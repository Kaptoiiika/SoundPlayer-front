import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { userReducer } from "entities/User"
import { scrollSaverReducer } from "features/ScrollSaver"
import { apiClient } from "shared/api/apiClient"
import { createReducerManager } from "./ReducerManager"
import { StateSchema, ThunkExtraArg } from "./StateSchema"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSaver: scrollSaverReducer,
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
  })

  //@ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
