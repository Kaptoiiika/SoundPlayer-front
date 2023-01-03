import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ListBox } from "./ListBox"

export default {
  title: "shared/ListBox",
  component: ListBox,
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox<{ id: number; name: string; unavailable: boolean }>> = (args) => (
  <ListBox
    {...args}
    items={[
      { id: 1, name: "Durward Reynolds", unavailable: false },
      { id: 2, name: "Kenton Towne", unavailable: false },
      { id: 3, name: "Therese Wunsch", unavailable: false },
      { id: 4, name: "Benedict Kessler", unavailable: true },
      { id: 5, name: "Katelyn Rohan", unavailable: false },
    ]}
    optionKey={(item) => item.id}
    optionLabel={(item) => item.name}
  ></ListBox>
)

export const Default = Template.bind({})
Default.args = {}
