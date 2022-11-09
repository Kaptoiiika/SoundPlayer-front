import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator"
import { ProfilePage } from "./ProfilePage"

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args}></ProfilePage>
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    user: {
      authData: {
        email: "email@e.mail",
        id: 2,
        username: "username",
      },
    },
  }),
]
