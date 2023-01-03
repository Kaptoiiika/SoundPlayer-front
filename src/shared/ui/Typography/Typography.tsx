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
  S = "sizeS",
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXL",
}

type HeaderTagType = "h1" | "h2" | "h3" | "p"

const mapSizeToHeaderTag: Record<TypographySize, HeaderTagType> = {
  [TypographySize.S]: "h3",
  [TypographySize.M]: "p",
  [TypographySize.L]: "h2",
  [TypographySize.XL]: "h1",
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
    className,
    children,
    type = TypographyTypes.TEXT,
    align = TypographyAlign.LEFT,
    size = TypographySize.M,
    oneLine,
    bold,
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <HeaderTag
      className={classNames(
        [styles[type], styles[align], styles[size], className],
        {
          [styles.oneLine]: oneLine,
          [styles.bold]: bold,
        }
      )}
      title={oneLine ? String(children) : undefined}
    >
      {children}
    </HeaderTag>
  )
})
