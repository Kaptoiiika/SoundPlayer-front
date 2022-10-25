import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ThemeSwitcher } from "./ThemeSwitcher"

export default {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args}></ThemeSwitcher>
)

export const Default = Template.bind({})
Default.args = {}
