import { PropsWithChildren } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Typography.module.scss"

export const enum TypographyTypes {
  TEXT = "text",
  ERROR = "error",
}

type TypographyProps = {
  className?: string
  type?: TypographyTypes
} & PropsWithChildren

export const Typography = (props: TypographyProps) => {
  const { className = "", children, type = TypographyTypes.TEXT } = props

  return (
    <span className={classNames([styles.Typography, styles[type], className])}>
      {children}
    </span>
  )
}
