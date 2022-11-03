import { DetailedHTMLProps, HTMLAttributes } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Paper.module.scss"

type PaperProps = {
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Paper = (props: PaperProps) => {
  const { className = "", children, ...other } = props
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames([styles.Paper, className])} {...other}>
      {children}
    </div>
  )
}
