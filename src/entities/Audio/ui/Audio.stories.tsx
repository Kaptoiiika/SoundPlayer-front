import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator"
import { Audio } from "./Audio"

export default {
  title: "entities/Audio",
  component: Audio,
} as ComponentMeta<typeof Audio>

const Story: ComponentStory<typeof Audio> = () => <Audio />

export const Default = Story.bind({})
Default.decorators = [
  StoreDecorator({
    audio: {
      list: [],
    },
  }),
]
