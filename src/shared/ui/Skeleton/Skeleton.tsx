import { CSSProperties, PropsWithChildren } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Skeleton.module.scss"

type SkeletonProps = {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
} & PropsWithChildren

export const Skeleton = (props: SkeletonProps) => {
  const { className = "", height, width, border, children } = props

  const inlineStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div style={inlineStyles} className={classNames([styles.Skeleton, className])}>
      {children}
    </div>
  )
}
