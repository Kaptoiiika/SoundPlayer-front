import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
  title: 'entities/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args}></CommentList>
)

export const Default = Template.bind({})
Default.args = {}