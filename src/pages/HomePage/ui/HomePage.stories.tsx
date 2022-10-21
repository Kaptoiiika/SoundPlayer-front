import { ComponentStory, ComponentMeta } from "@storybook/react"
import HomePage from "./HomePage"

export default {
  title: "pages/HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>

const Story: ComponentStory<typeof HomePage> = () => <HomePage />

export const Default = Story.bind({})
