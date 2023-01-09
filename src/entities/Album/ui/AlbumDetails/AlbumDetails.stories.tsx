import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator"
import { AlbumDetails } from "./AlbumDetails"

export default {
  title: "entities/AlbumDetails",
  component: AlbumDetails,
} as ComponentMeta<typeof AlbumDetails>

const Template: ComponentStory<typeof AlbumDetails> = (args) => (
  <AlbumDetails {...args} id="1"></AlbumDetails>
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    albumDetails: {
      albums: {
        "1": {
          author: { username: "some user" },
          image: {
            url: "",
          },
          title: "title",
          audioList: [],
        },
      },
    },
  }),
]
