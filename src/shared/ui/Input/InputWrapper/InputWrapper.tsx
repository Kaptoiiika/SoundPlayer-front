import { PropsWithChildren } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./InputWrapper.module.scss"

type InputWrapperProps = {
  className?: string
} & PropsWithChildren

export const InputWrapper = (props: InputWrapperProps) => {
  const { children, className } = props
  return (
    <div className={classNames([className, styles.inputWrapper])}>
      {children}
    </div>
  )
}
