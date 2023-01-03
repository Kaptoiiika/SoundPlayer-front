import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Dropdown } from "./Dropdown"

export default {
  title: "shared/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} items={[{ content: "first" }]} label={'Dropdown'}></Dropdown>
)

export const Default = Template.bind({})
Default.args = {}
