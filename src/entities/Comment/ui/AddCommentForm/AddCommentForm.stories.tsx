import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AddCommentForm } from "./AddCommentForm"

export default {
  title: "entities/AddCommentForm",
  component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args}></AddCommentForm>
)

export const Default = Template.bind({})
Default.args = {}
