import { Popover as HPopover } from "@headlessui/react"
import { memo, PropsWithChildren, ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Paper } from "shared/ui/Paper/Paper"
import { popupsDirection, PopupsDirections } from "../styles/popupsDirection"
import popupsStyles from "../styles/popupsStyle.module.scss"

type PopoverProps = {
  className?: string
  directions?: PopupsDirections
  button?: ReactNode
} & PropsWithChildren

export const Popover = memo((props: PopoverProps) => {
  const { className = "", children, button, directions } = props

  return (
    <HPopover className={classNames([popupsStyles.popup, className])}>
      <HPopover.Button>{button}</HPopover.Button>
      <HPopover.Panel
        as={Paper}
        className={classNames([
          popupsStyles.popupBody,
          popupsDirection(directions),
        ])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
