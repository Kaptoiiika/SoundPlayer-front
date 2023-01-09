import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator"
import { AudioPlayer } from "./AudioPlayer"

export default {
  title: "entities/AudioPlayer",
  component: AudioPlayer,
} as ComponentMeta<typeof AudioPlayer>

const Template: ComponentStory<typeof AudioPlayer> = () => <AudioPlayer />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    audioPlayer: {},
  }),
]
