import { Story } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { authByUsernameSliceReducer } from "features/AuthByUsername/model/slice/AuthByUsernameSlice"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  authByUsername: authByUsernameSliceReducer,
}

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
    (StoryComponent: Story) =>
      (
        <StoreProvider
          initialState={state}
          asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
          <StoryComponent />
        </StoreProvider>
      )
