import { PropsWithChildren, useEffect } from "react"
import { createReduxStore } from "../config/store"
import { Provider } from "react-redux"
import { StateSchema } from "../config/StateSchema"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { initalAuthData } from "entities/User"

type StoreProviderProps = {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
} & PropsWithChildren

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  useEffect(() => {
    store.dispatch(initalAuthData())
  }, [store])

  return <Provider store={store}>{children}</Provider>
}
