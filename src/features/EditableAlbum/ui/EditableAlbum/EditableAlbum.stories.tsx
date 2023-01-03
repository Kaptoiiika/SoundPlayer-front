import { ComponentStory, ComponentMeta } from "@storybook/react"
import { EditableAlbum } from "./EditableAlbum"

export default {
  title: "features/EditableAlbum",
  component: EditableAlbum,
} as ComponentMeta<typeof EditableAlbum>

const Template: ComponentStory<typeof EditableAlbum> = (args) => (
  <EditableAlbum {...args}></EditableAlbum>
)

export const Default = Template.bind({})
Default.args = {}
