import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, ButtonVariant } from "./Button"

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Text",
  variant: ButtonVariant.PRIMARY,
}

export const Outline = Template.bind({})
Outline.args = {
  children: "Text",
  variant: ButtonVariant.OUTLINE,
}
