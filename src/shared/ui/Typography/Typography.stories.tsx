import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Typography, TypographyTypes } from "./Typography"

export default {
  title: "shared/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    Minim sunt exercitation fugiat occaecat fugiat tempor sunt ipsum officia
    laboris eiusmod.
  </Typography>
)

export const Default = Template.bind({})
Default.args = {}

export const Text = Template.bind({})
Text.args = {
  type: TypographyTypes.TEXT,
}

export const Error = Template.bind({})
Error.args = {
  type: TypographyTypes.ERROR,
}
