import { ReducersMapObject } from "@reduxjs/toolkit"
import { PropsWithChildren, useEffect } from "react"
import { Provider } from "react-redux"
import { initalAuthData } from "@/entities/User"
import { StateSchema } from "@/shared/config/storeConfig"
import { createReduxStore } from "../config/store"

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
