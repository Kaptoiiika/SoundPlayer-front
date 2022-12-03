import { AlbumModel } from "entities/Album"
import { memo, Suspense } from "react"
import { Loader } from "shared/ui/Loader/Loader"
import { Modal } from "shared/ui/Modal/Modal"
import { EditableAlbum } from "../EditableAlbum/EditableAlbum.lazy"

type EditableAlbumModalProps = {
  isOpen?: boolean
  album: AlbumModel
  onClose?: () => void
  onSave?: () => void
}

export const EditableAlbumModal = memo((props: EditableAlbumModalProps) => {
  const { isOpen, onClose, onSave, album } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <EditableAlbum album={album} onSave={onSave} />
      </Suspense>
    </Modal>
  )
})
