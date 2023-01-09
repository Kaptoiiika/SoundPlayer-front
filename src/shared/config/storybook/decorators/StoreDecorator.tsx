/* eslint-disable boundaries/element-types */ // used for storybook 
import { ReducersMapObject } from "@reduxjs/toolkit"
import { Story } from "@storybook/react"
import { StoreProvider } from "@/app/providers/StoreProvider"
import { authByUsernameSliceReducer } from "@/features/AuthByUsername/model/slice/AuthByUsernameSlice"
import { StateSchema } from "@/shared/config/storeConfig"

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
