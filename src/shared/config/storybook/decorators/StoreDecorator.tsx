import { Story } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import {  ReducersMapObject } from "@reduxjs/toolkit"
import { uploadAudioReducer } from "features/UploadAudio"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  //@ts-ignore
  audioForm: uploadAudioReducer,
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
