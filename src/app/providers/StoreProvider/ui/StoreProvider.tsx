import { PropsWithChildren } from "react"
import { createReduxStore } from "../config/store"
import { Provider } from "react-redux"
import { StateSchema } from "../config/StateSchema"
import { DeepPartial } from "@reduxjs/toolkit"

type StoreProviderProps = {
  initialState?: DeepPartial<StateSchema>
} & PropsWithChildren

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState as StateSchema)

  return <Provider store={store}>{children}</Provider>
}
