import { InputHTMLAttributes, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { InputWrapper } from "../InputWrapper/InputWrapper"
import styles from "./Input.module.scss"

type InputProps = {
  className?: string
  onValueChange?: (newValue: string) => void
  label?: string
  readOnly?: boolean
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = memo((props: InputProps) => {
  const {
    className,
    onValueChange,
    onChange,
    type = "text",
    label,
    readOnly = false,
    fullWidth,
    ...otherProps
  } = props

  const onChangeHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  return (
    <InputWrapper
      className={classNames(className, {
        [styles.fullWidth]: fullWidth,
      })}
    >
      {label !== undefined && <label className={styles.label}>{label}</label>}
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
        size={4}
        className={styles.input}
        type={type}
        onChange={onChangeHundler}
        readOnly={readOnly}
      />
    </InputWrapper>
  )
})
