import React, { InputHTMLAttributes, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Input.module.scss"

type InputProps = {
  className?: string
  value?: string
  onValueChange?: (newValue: string) => void
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = memo((props: InputProps) => {
  const {
    className = "",
    value,
    onValueChange,
    onChange,
    type = "text",
    label,
    ...otherProps
  } = props

  const onChangeHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  return (
    <div className={classNames([styles.inputWrapper, className])}>
      {label !== undefined && <label className={styles.label}>{label}</label>}
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHundler}
      />
    </div>
  )
})
