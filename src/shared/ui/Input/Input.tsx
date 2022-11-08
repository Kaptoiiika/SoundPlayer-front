import { InputHTMLAttributes, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Input.module.scss"

type InputProps = {
  className?: string
  onValueChange?: (newValue: string) => void
  label?: string
  readOnly?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = memo((props: InputProps) => {
  const {
    className = "",
    onValueChange,
    onChange,
    type = "text",
    label,
    readOnly = false,
    ...otherProps
  } = props

  const onChangeHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  return (
    <div
      className={classNames([styles.inputWrapper, className], {
        [styles.readOnly]: readOnly,
      })}
    >
      {label !== undefined && <label className={styles.label}>{label}</label>}
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
        className={styles.input}
        type={type}
        onChange={onChangeHundler}
        readOnly={readOnly}
      />
    </div>
  )
})
