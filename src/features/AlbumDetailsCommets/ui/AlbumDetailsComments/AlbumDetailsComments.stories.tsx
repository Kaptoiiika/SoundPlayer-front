import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AlbumDetailsComments } from "./AlbumDetailsComments"

export default {
  title: "features/AlbumDetailsComments",
  component: AlbumDetailsComments,
} as ComponentMeta<typeof AlbumDetailsComments>

const Template: ComponentStory<typeof AlbumDetailsComments> = (args) => (
  <AlbumDetailsComments {...args} id={args.id || "2"}></AlbumDetailsComments>
)

export const Default = Template.bind({})
Default.args = {}
