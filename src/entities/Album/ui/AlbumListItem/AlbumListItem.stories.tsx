import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { AlbumListItem } from "./AlbumListItem"

export default {
  title: "shared/AlbumListItem",
  component: AlbumListItem,
} as ComponentMeta<typeof AlbumListItem>
const album = {
  title: "sometitle",
  author: { username: "some userName" },
} as AlbumModel

const Template: ComponentStory<typeof AlbumListItem> = (args) => (
  <AlbumListItem {...args} album={album}></AlbumListItem>
)

export const Default = Template.bind({})
Default.args = {}
