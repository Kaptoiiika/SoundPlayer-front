import { ComponentStory, ComponentMeta } from "@storybook/react"
import AudioPage from "./AudioPage"

export default {
  title: "pages/AudioPage",
  component: AudioPage,
} as ComponentMeta<typeof AudioPage>

const Story: ComponentStory<typeof AudioPage> = () => <AudioPage />

export const Default = Story.bind({})