import { Listbox as HListbox } from "@headlessui/react"
import { Fragment, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Paper } from "../../Paper/Paper"
import { Typography } from "../../Typography/Typography"
import {
  popupsDirection,
  PopupsDirections,
} from "../styles/popupsDirection"
import popupsStyles from "../styles/popupsStyle.module.scss"
import styles from "./ListBox.module.scss"

export type ListBoxProps<T> = {
  items: T[]
  value?: T
  defaultValue?: T
  onChange?: (newValue: T) => void
  optionKey?: (option: T) => React.Key
  optionLabel?: (option: T) => string
  className?: string
  directions?: PopupsDirections
}

const ListBoxComponent = <T,>(props: ListBoxProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue = items[0],
    optionLabel = (option) => String(option),
    optionKey,
    onChange,
    directions,
  } = props

  return (
    <HListbox
      as={"div"}
      className={classNames([className, popupsStyles.popup])}
      value={value}
      onChange={onChange}
    >
      <HListbox.Button className={styles.trigger}>
        <Typography>{optionLabel(value ?? defaultValue)}</Typography>
      </HListbox.Button>
      <HListbox.Options
        as={Paper}
        className={classNames([
          popupsStyles.popupBody,
          popupsDirection(directions),
        ])}
      >
        {items.map((item, index) => (
          <HListbox.Option
            as={Fragment}
            key={optionKey?.(item) ?? `${optionLabel(item)}-${index}`}
            value={item}
          >
            {({ active, selected, disabled }) => (
              <li
                className={classNames(styles.option, {
                  [styles.active]: active,
                  [styles.selected]: selected,
                  [styles.optionDisabled]: disabled,
                })}
              >
                <Typography oneLine>{optionLabel(item)}</Typography>
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  )
}

export const ListBox = memo(ListBoxComponent) as typeof ListBoxComponent
