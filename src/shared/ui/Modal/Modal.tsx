import { useTheme } from "app/providers/ThemeProvider"
import React, { PropsWithChildren, useEffect, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Paper } from "../Paper/Paper"
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const hundleClose = () => {
    onClose?.()
  }

  const hundleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  if (!isMounted) {
    return null
  }

  return (
    <Portal>
      <div
        className={classNames([styles.Modal, className, theme], {
          [styles.opened]: isOpen,
        })}
      >
        <div className={styles.overlay} onClick={hundleClose}>
          <Paper className={styles.content} onClick={hundleContentClick}>
            {children}
          </Paper>
        </div>
      </div>
    </Portal>
  )
}
