import { ComponentStory, ComponentMeta } from "@storybook/react"
import { EditableProfile } from "./EditableProfile"

export default {
  title: "features/EditableProfile",
  component: EditableProfile,
} as ComponentMeta<typeof EditableProfile>

const Template: ComponentStory<typeof EditableProfile> = (args) => (
  <EditableProfile {...args}></EditableProfile>
)

export const Default = Template.bind({})
Default.args = {}
