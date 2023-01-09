import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator"
import { AudioPage } from "./AudioPage"

export default {
  title: "pages/AudioPage",
  component: AudioPage,
} as ComponentMeta<typeof AudioPage>

const Story: ComponentStory<typeof AudioPage> = () => <AudioPage />

export const Default = Story.bind({})
Default.decorators = [
  StoreDecorator({
    audio: {
      list: [
        {
          id: 2,
          duratation: 1000,
          size: 20000,
        },
        {
          id: 3,
          duratation: 2000,
          size: 30000,
        },
      ],
    },
  }),
]
