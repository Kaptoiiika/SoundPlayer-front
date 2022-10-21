import { addDecorator } from "@storybook/react"
import { Theme } from "../../src/app/providers/ThemeProvider"
import { StyleDecorator } from "../../src/shared/config/storybook/decorators/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator"
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(ThemeDecorator(Theme.DARK))
addDecorator(StyleDecorator)
addDecorator(RouterDecorator)