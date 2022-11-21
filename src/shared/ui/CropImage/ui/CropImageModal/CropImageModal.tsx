import { Suspense } from "react"
import { Loader } from "shared/ui/Loader/Loader"
import { Modal } from "shared/ui/Modal/Modal"
import { UploadImageProps } from "../CropImage/CropImage"
import { CropImageLazy } from "../CropImage/CropImage.lazy"

type CropImageModalProps = {
  isOpen?: boolean
  onClose?: () => void
} & UploadImageProps

export const CropImageModal = (props: CropImageModalProps) => {
  const { isOpen, onClose, onLoad } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <CropImageLazy  onLoad={onLoad} />
      </Suspense>
    </Modal>
  )
}
