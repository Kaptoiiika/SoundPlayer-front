import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/Modal/Modal"
import { UploadAudioForm } from "../UploadAudioForm/UploadAudioForm"
import styles from "./UploadAudioModal.module.scss"

type UploadAudioModalProps = {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const UploadAudioModal = (props: UploadAudioModalProps) => {
  const { className = "", isOpen, onClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames([styles.UploadAudioModal, className])}
    >
      <UploadAudioForm />
    </Modal>
  )
}
