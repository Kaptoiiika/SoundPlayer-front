import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { authByUsernameInitial } from "../../slice/AuthByUsernameSlice"

export const getAuthByUsernameState = (state: StateSchema) =>
  state.authByUsername || authByUsernameInitial
