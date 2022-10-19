import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AppLink, AppLinkTheme } from "./AppLink"

export default {
  title: "shared/AppLink",
  component: AppLink,
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "SomeText",
  variant: AppLinkTheme.PRIMARY,
}

export const Active = Template.bind({})
Active.args = {
  children: "SomeText",
  variant: AppLinkTheme.ACTIVE,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "SomeText",
  variant: AppLinkTheme.SECONDARY,
}
