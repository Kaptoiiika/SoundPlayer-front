import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Paper } from "./Paper"

export default {
  title: "shared/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = (args) => (
  <Paper {...args}></Paper>
)

export const Default = Template.bind({})
Default.args = {}
