import { PropsWithChildren } from "react"
import { createReduxStore } from "../config/store"
import { Provider } from "react-redux"
import { StateSchema } from "../config/StateSchema"

type StoreProviderProps = {
  initialState?: StateSchema
} & PropsWithChildren

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore()

  return <Provider store={store}>{children}</Provider>
}
