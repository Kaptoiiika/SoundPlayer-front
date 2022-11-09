import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProfileCard } from "./ProfileCard"

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args}></ProfileCard>
)

export const Default = Template.bind({})
Default.args = {
  user: {
    email: "email@e.mail",
    id: 2,
    username: "username",
  },
}
