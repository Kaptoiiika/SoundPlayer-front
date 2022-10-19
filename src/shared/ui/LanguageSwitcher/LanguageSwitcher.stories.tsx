import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LanguageSwitcher } from "./LanguageSwitcher"

export default {
  title: "shared/LanguageSwitcher",
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
  <LanguageSwitcher {...args} />
)

export const Default = Template.bind({})
Default.args = {}
