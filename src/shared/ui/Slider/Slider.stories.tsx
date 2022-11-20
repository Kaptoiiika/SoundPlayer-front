import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Slider } from "./Slider"

export default {
  title: "shared/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}></Slider>
)

export const Default = Template.bind({})
Default.args = {}
