import { memo, PropsWithChildren } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Typography.module.scss"

export const enum TypographyTypes {
  TEXT = "text",
  ERROR = "error",
}

type TypographyProps = {
  className?: string
  type?: TypographyTypes
  oneLine?: boolean
  bold?: boolean
} & PropsWithChildren

export const Typography = memo((props: TypographyProps) => {
  const {
    className = "",
    children,
    type = TypographyTypes.TEXT,
    oneLine,
    bold,
  } = props

  return (
    <span
      className={classNames([styles.Typography, styles[type], className], {
        [styles.oneLine]: oneLine,
        [styles.bold]: bold,
      })}
    >
      {children}
    </span>
  )
})
