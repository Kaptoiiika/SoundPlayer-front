import { ComponentStory, ComponentMeta } from "@storybook/react"
import { UploadImage } from "./UploadImage"

export default {
  title: "features/UploadImage",
  component: UploadImage,
} as ComponentMeta<typeof UploadImage>

const Template: ComponentStory<typeof UploadImage> = (args) => (
  <UploadImage {...args}></UploadImage>
)

export const Default = Template.bind({})
Default.args = {}
