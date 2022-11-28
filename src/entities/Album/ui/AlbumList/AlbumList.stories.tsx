import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AlbumList } from "./AlbumList"

export default {
  title: "entities/AlbumList",
  component: AlbumList,
} as ComponentMeta<typeof AlbumList>

const Template: ComponentStory<typeof AlbumList> = (args) => (
  <AlbumList {...args}></AlbumList>
)

export const Default = Template.bind({})
Default.args = {}
