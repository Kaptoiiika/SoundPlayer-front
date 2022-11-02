import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Loader } from "shared/ui/Loader/Loader"
import { Modal } from "shared/ui/Modal/Modal"
import { UploadAudioFormLazy } from "../UploadAudioForm/UploadAudioForm.lazy"

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
      className={classNames([className])}
    >
      <Suspense fallback={<Loader />}>
        <UploadAudioFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
