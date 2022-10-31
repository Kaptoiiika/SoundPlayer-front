/* eslint-disable */
// @ts-nocheck
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Modal } from "./Modal"

export default {
  title: "shared/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal isOpen {...args}>
    Minim sunt exercitation fugiat occaecat fugiat tempor sunt ipsum officia
    laboris eiusmod.
  </Modal>
)

export const Default = Template.bind({})
Default.args = {}

// vscode snippets
// ctrl+shift+p => Configure User Snippets => typescript React
/*
  "Storybook component": {
    "prefix": "storybook",
    "description": "create storybook preset",
    "body": [
      "import { ComponentStory, ComponentMeta } from '@storybook/react'",
      "import { ${TM_FILENAME_BASE} } from './${TM_FILENAME_BASE}'",
      "",
      "export default {",
      "  title: 'shared/${TM_FILENAME_BASE}',",
      "  component: ${TM_FILENAME_BASE},",
      "} as ComponentMeta<typeof ${TM_FILENAME_BASE}>",
      "",
      "const Template: ComponentStory<typeof ${TM_FILENAME_BASE}> = (args) => (",
      "  <${TM_FILENAME_BASE} {...args}></${TM_FILENAME_BASE}>",
      ")",
      "",
      "export const Default = Template.bind({})",
      "Default.args = {}",
    ],
  },
}
*/
