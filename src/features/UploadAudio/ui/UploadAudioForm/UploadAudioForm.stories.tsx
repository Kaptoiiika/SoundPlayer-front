import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator"
import { UploadAudioForm } from "./UploadAudioForm"

export default {
  title: "features/UploadAudioForm",
  component: UploadAudioForm,
} as ComponentMeta<typeof UploadAudioForm>

const Template: ComponentStory<typeof UploadAudioForm> = (args) => (
  <UploadAudioForm {...args}></UploadAudioForm>
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    audioForm: { name: "asd", audioIsLoaded: true },
  }),
]

export const FormWithError = Template.bind({})
FormWithError.args = {}
FormWithError.decorators = [
  StoreDecorator({
    audioForm: {
      name: "asd",
      error: "some error",
      audioIsLoaded: true,
    },
  }),
]

export const FormIsLoading = Template.bind({})
FormIsLoading.args = {}
FormIsLoading.decorators = [
  StoreDecorator({
    audioForm: { isloading: true, name: "asd" },
  }),
]
