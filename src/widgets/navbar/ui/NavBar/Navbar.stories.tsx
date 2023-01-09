import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator"
import { Navbar } from "./Navbar"

export default {
  title: "widgets/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Story: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Story.bind({})
Default.decorators = [
  StoreDecorator({
    user: {},
  }),
]

export const AuthUser = Story.bind({})
AuthUser.decorators = [
  StoreDecorator({
    user: {
      authData: {
        email: "email",
        id: 2,
        username: "username",
      },
    },
  }),
]
