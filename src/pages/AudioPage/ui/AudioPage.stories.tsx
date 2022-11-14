import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AudioPage } from "./AudioPage"
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator"

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
          name: "someName",
          id: 2,
          fileName: "filename",
          duratation: 1000,
          size: 20000,
        },
        {
          name: "someOtherName",
          id: 3,
          fileName: "filename",
          duratation: 2000,
          size: 30000,
        },
      ],
    },
  }),
]
