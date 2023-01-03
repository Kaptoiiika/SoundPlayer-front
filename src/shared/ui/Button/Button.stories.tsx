import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

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
  disabled: false,
}
export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  children: "Text",
  variant: ButtonVariant.PRIMARY,
  disabled: true,
}

export const Outline = Template.bind({})
Outline.args = {
  children: "Text",
  variant: ButtonVariant.OUTLINE,
  disabled: false,
}
export const OutlineDisabled = Template.bind({})
OutlineDisabled.args = {
  children: "Text",
  variant: ButtonVariant.OUTLINE,
  disabled: true,
}
