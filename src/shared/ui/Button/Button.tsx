import { classNames } from "shared/lib/classNames/classNames"
import { ButtonHTMLAttributes, memo } from "react"
import styles from "./Button.module.scss"

export const enum ButtonVariant {
  OUTLINE = "outline",
  PRIMARY = "primary",
}

export const enum ButtonSizes {
  M = "size-m",
  L = "size-l",
  XS = "size-xl",
}

type ButtonProps = {
  className?: string
  variant?: ButtonVariant
  size?: ButtonSizes
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo((props: ButtonProps) => {
  const {
    className = "",
    children,
    variant = ButtonVariant.PRIMARY,
    size = ButtonSizes.M,
    disabled = false,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={classNames(
        [styles.Button, className, styles[variant], styles[size]],
        {
          [styles.disabled]: disabled,
        }
      )}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  )
})