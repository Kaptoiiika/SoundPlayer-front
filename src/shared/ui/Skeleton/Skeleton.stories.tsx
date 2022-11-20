import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Skeleton } from "./Skeleton"

export default {
  title: "shared/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args}></Skeleton>
)

export const Default = Template.bind({})
Default.args = {}
