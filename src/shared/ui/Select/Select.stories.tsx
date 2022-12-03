import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Select } from "./Select"

export default {
  title: "shared/Select",
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}></Select>
)

export const Default = Template.bind({})
Default.args = {}
