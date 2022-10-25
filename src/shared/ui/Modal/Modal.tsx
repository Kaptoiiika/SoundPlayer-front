import { useTheme } from "app/providers/ThemeProvider"
import React, { PropsWithChildren } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Portal } from "../Portal/Portal"
import styles from "./Modal.module.scss"

type ModalProps = {
  className?: string
  isOpen?: boolean
  onClose?: () => void
} & PropsWithChildren

export const Modal = (props: ModalProps) => {
  const { className = "", children, isOpen = false, onClose } = props
  const { theme } = useTheme()

  const hundleClose = () => {
    onClose?.()
  }

  const hundleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Portal>
      <div
        className={classNames([styles.Modal, className, theme], {
          [styles.opened]: isOpen,
        })}
      >
        <div className={styles.overlay} onClick={hundleClose}>
          <div className={styles.content} onClick={hundleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
