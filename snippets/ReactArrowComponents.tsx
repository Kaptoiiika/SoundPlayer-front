/* eslint-disable */
// @ts-nocheck
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ReactArrowComponents.module.scss'

type ReactArrowComponentsProps = {
  className?: string
}

export const ReactArrowComponents = (props: ReactArrowComponentsProps) => {
  const { className = "" } = props
  return (<div className={classNames(['', className])}></div>)
}

// vscode snippets 
// ctrl+shift+p => Configure User Snippets => typescript React
/*
{
  "React Arrow component": {
    "prefix": "tsaf",
		"description": "create ts react arrow component",
    "body": [
      "import { classNames } from 'shared/lib/classNames/classNames'",
      "import styles from './$TM_FILENAME_BASE.module.scss'",
      "",
      "type ${TM_FILENAME_BASE}Props = {",
      "  className?: string",
      "}",
      "",
      "export const $TM_FILENAME_BASE = (props: ${TM_FILENAME_BASE}Props) => {",
      "  const { className = \"\" } = props",
      "  return (<div className={classNames(['', className])}></div>)",
      "}"
    ]
  }
}
*/

// webStorm - idk)