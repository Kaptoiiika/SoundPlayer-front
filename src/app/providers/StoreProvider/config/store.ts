import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { scrollSaverReducer } from "@/features/ScrollSaver"
import { userReducer } from "@/entities/User"
import { apiClient } from "@/shared/api/apiClient"
import { rtkApi } from "@/shared/api/RtkApi"
import { StateSchema, ThunkExtraArg } from "@/shared/config/storeConfig"
import { createReducerManager } from "./ReducerManager"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSaver: scrollSaverReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
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
      }).concat(rtkApi.middleware),
  })

  //@ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
