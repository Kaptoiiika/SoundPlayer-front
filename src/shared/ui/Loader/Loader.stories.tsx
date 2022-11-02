import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Loader } from "./Loader"

export default {
  title: "shared/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args}></Loader>
)

export const Default = Template.bind({})
Default.args = {}
