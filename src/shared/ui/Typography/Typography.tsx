import { memo, PropsWithChildren } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Typography.module.scss"

export const enum TypographyTypes {
  TEXT = "text",
  ERROR = "error",
}

export const enum TypographyAlign {
  LEFT = "align-left",
  RIGHT = "align-right",
  CENTER = "align-center",
}

export const enum TypographySize {
  M = "sizeM",
  L = "sizeL",
  S = "sizeS",
}

type TypographyProps = {
  className?: string
  type?: TypographyTypes
  align?: TypographyAlign
  oneLine?: boolean
  bold?: boolean
  size?: TypographySize
} & PropsWithChildren

export const Typography = memo((props: TypographyProps) => {
  const {
    className = "",
    children,
    type = TypographyTypes.TEXT,
    align = TypographyAlign.LEFT,
    size = TypographySize.M,
    oneLine,
    bold,
  } = props

  return (
    <p
      className={classNames(
        [
          styles[type],
          styles[align],
          styles[size],
          className,
        ],
        {
          [styles.oneLine]: oneLine,
          [styles.bold]: bold,
        }
      )}
    >
      {children}
    </p>
  )
})
