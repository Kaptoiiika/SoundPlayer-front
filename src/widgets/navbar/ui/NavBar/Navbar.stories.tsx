import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Navbar } from "./Navbar"

export default {
  title: "widgets/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Story: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Story.bind({})
