import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Modal } from "./Modal"

export default {
  title: "shared/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal isOpen {...args}>Minim sunt exercitation fugiat occaecat fugiat tempor sunt ipsum officia laboris eiusmod.</Modal>
)

export const Default = Template.bind({})
Default.args = {}
