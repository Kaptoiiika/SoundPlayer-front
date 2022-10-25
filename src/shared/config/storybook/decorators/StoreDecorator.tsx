import { Story } from "@storybook/react"
import { createReduxStore } from "app/providers/StoreProvider/config/store"
import { Provider } from "react-redux"

export const StoreDecorator = (StoryComponent: Story) => {
  const store = createReduxStore()
  return (
    <Provider store={store}>
      <StoryComponent />
    </Provider>
  )
}
