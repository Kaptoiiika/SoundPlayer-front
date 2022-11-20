import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CropImage } from "./CropImage"

export default {
  title: "shared/CropImage",
  component: CropImage,
} as ComponentMeta<typeof CropImage>

const Template: ComponentStory<typeof CropImage> = (args) => (
  <CropImage {...args}></CropImage>
)

export const Default = Template.bind({})
Default.args = {}
