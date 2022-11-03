import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AuthorizationPage } from "./AuthorizationPage"
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator"

export default {
  title: "pages/AuthorizationPage",
  component: AuthorizationPage,
} as ComponentMeta<typeof AuthorizationPage>

const Template: ComponentStory<typeof AuthorizationPage> = () => (
  <AuthorizationPage></AuthorizationPage>
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]
