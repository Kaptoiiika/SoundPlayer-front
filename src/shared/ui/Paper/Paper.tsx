import { DetailedHTMLProps, forwardRef, HTMLAttributes, LegacyRef } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Paper.module.scss"

type PaperProps = {
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Paper = forwardRef(
  (props: PaperProps, ref: LegacyRef<HTMLDivElement>) => {
    const { className, children, ...other } = props
    return (
      <div
        ref={ref}
        className={classNames([styles.Paper, className])}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      >
        {children}
      </div>
    )
  }
)
