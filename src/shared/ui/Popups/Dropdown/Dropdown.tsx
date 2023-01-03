import { Menu } from "@headlessui/react"
import { memo, ReactNode } from "react"
import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { Paper } from "shared/ui/Paper/Paper"
import { Typography } from "shared/ui/Typography/Typography"
import { popupsDirection, PopupsDirections } from "../styles/popupsDirection"
import popupsStyles from "../styles/popupsStyle.module.scss"
import styles from "./Dropdown.module.scss"

export type DropdownItem = {
  content: ReactNode
  disabled?: boolean
  onClick?: () => void
  link?: string
}

type DropdownProps = {
  className?: string
  label: ReactNode
  items: DropdownItem[]
  directions?: PopupsDirections
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, label, directions } = props

  return (
    <Menu as={"div"} className={classNames([className, popupsStyles.popup])}>
      <Menu.Button as={Button}>{label}</Menu.Button>
      <Menu.Items
        as={Paper}
        className={classNames([
          popupsStyles.popupBody,
          popupsDirection(directions),
        ])}
      >
        {items.map((item, index) => (
          <Menu.Item key={`${item.content}-${index}`}>
            {({ active }) => {
              if (item.link) {
                return (
                  <Link onClick={item.onClick} to={item.link}>
                    <Typography
                      className={classNames(styles.item, {
                        [styles.active]: active,
                      })}
                      oneLine
                    >
                      {item.content}
                    </Typography>
                  </Link>
                )
              }

              return (
                <div onClick={item.onClick}>
                  <Typography
                    className={classNames(styles.item, {
                      [styles.active]: active,
                    })}
                    oneLine
                  >
                    {item.content}
                  </Typography>
                </div>
              )
            }}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
})
