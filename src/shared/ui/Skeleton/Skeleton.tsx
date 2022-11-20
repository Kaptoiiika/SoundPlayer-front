import { PropsWithChildren } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Skeleton.module.scss"

type SkeletonProps = {
  className?: string
} & PropsWithChildren

export const Skeleton = (props: SkeletonProps) => {
  const { className = "", children } = props
  return (
    <div className={classNames([styles.Skeleton, className])}>{children}</div>
  )
}
