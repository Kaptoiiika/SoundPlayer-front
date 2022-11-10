import { Suspense } from "react"
import { Loader } from "shared/ui/Loader/Loader"
import { Modal } from "shared/ui/Modal/Modal"
import { UploadImageProps } from "../UploadImage/UploadImage"
import { UploadImageLazy } from "../UploadImage/UploadImage.lazy"

type UploadImageModalProps = {
  isOpen?: boolean
  onClose?: () => void
} & UploadImageProps

export const UploadImageModal = (props: UploadImageModalProps) => {
  const { isOpen, onClose, initalSrc, onLoad } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <UploadImageLazy initalSrc={initalSrc} onLoad={onLoad}/>
      </Suspense>
    </Modal>
  )
}
