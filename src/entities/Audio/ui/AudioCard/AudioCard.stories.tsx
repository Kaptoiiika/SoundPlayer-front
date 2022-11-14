import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AudioCard } from "./AudioCard"

export default {
  title: "entities/AudioCard",
  component: AudioCard,
} as ComponentMeta<typeof AudioCard>

const Template: ComponentStory<typeof AudioCard> = (args) => (
  <AudioCard {...args}></AudioCard>
)

export const Default = Template.bind({})
Default.args = {
  audio: {
    name: "someName",
    id: 2,
    fileName: "filename",
    duratation: 1000,
    size: 20000,
  },
}
