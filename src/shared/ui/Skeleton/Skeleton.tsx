import { CSSProperties, PropsWithChildren } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Skeleton.module.scss"

type SkeletonProps = {
  className?: string
  height?: string | number
  width?: string | number
  margin?: string
  border?: string
} & PropsWithChildren

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width, border, margin, children } = props

  const inlineStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
    margin,
  }

  return (
    <div
      style={inlineStyles}
      className={classNames([styles.Skeleton, className])}
    >
      {children}
    </div>
  )
}
