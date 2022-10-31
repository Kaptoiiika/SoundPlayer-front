import { DeepPartial } from "@reduxjs/toolkit"
import { Story } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    )
  }
