import { ChangeEvent, memo, useMemo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Typography } from "../Typography/Typography"
import styles from "./Select.module.scss"

interface SelectProps<T> {
  className?: string
  label?: string
  options?: T[]
  optionLabel?: (option: T) => string
  value?: string
  onChange?: (value: T | undefined) => void
  readonly?: boolean
}

const SelectComponet = <T,>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly,
    optionLabel = (opt) => String(opt),
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options?.find(
      (opt) => optionLabel(opt) === e.target.value
    )

    onChange?.(selectedValue)
  }

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option
          className={styles.option}
          value={optionLabel(opt)}
          key={optionLabel(opt)}
        >
          {optionLabel(opt)}
        </option>
      )),
    [optionLabel, options]
  )

  return (
    <div className={classNames([styles.Wrapper, className])}>
      {label && <Typography className={styles.label}>{`${label}`}</Typography>}
      <select
        disabled={readonly}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        <option className={styles.option} value={""}>
          {""}
        </option>
        {optionsList}
      </select>
    </div>
  )
}

// не хочет нормально работать дженерик
export const Select = memo(SelectComponet) as typeof SelectComponet
