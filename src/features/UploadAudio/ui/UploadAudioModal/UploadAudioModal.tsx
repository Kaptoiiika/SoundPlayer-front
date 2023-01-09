import { memo, Suspense } from "react"
import { Loader } from "@/shared/ui/Loader/Loader"
import { Modal } from "@/shared/ui/Modal/Modal"
import { UploadAudioFormLazy } from "../UploadAudioForm/UploadAudioForm.lazy"

type UploadAudioModalProps = {
  isOpen?: boolean
  onClose?: () => void
}

export const UploadAudioModal = memo((props: UploadAudioModalProps) => {
  const { isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <UploadAudioFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
})
