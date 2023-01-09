import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import {
  getEditableAlbumImage,
  getEditableAlbumTitle,
} from "@/features/EditableAlbum/model/selectors/getEditableAlbum"
import { saveAlbumChanges } from "@/features/EditableAlbum/model/services/saveAlbumChanges"
import { uploadAlbumAvatar } from "@/features/EditableAlbum/model/services/uploadAlbumAvatar"
import {
  editableAlbumActions,
  editableAlbumReducer,
} from "@/features/EditableAlbum/model/slice/editableAlbumSlice"
import { AlbumModel } from "@/entities/Album"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "@/shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Avatar, AvatarSize } from "@/shared/ui/Avatar/Avatar"
import { Button } from "@/shared/ui/Button/Button"
import { CropImageModal } from "@/shared/ui/CropImage"
import { Input } from "@/shared/ui/Input/Input/Input"
import { TextArea } from "@/shared/ui/Input/TextArea/TextArea"
import { HStack, VStack } from "@/shared/ui/Stack"
import styles from "./EditableAlbum.module.scss"

type EditableAlbumProps = {
  album?: AlbumModel
  onSave?: () => void
}

export const EditableAlbum = (props: EditableAlbumProps) => {
  useDynamicModuleLoader({ reducers: { editableAlbum: editableAlbumReducer } })
  const { album, onSave } = props
  const { t } = useTranslation()
  const [avatarModalOpen, setAvatarModalOpen] = useState(false)
  const title = useSelector(getEditableAlbumTitle)
  const image = useSelector(getEditableAlbumImage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(editableAlbumActions.initAlbum(album))
  }, [album, dispatch])

  const togleEditAvatar = useCallback(() => {
    setAvatarModalOpen((prev) => !prev)
  }, [])

  const hundleSave = useCallback(async () => {
    await dispatch(saveAlbumChanges())
    onSave?.()
  }, [dispatch, onSave])

  const hundleUploadImage = useCallback(
    (newAvatar: Blob) => {
      dispatch(uploadAlbumAvatar(newAvatar))
      setAvatarModalOpen(false)
    },
    [dispatch]
  )

  const hundleSetTitle = useCallback(
    (newValue: string) => {
      dispatch(editableAlbumActions.setTitle(newValue))
    },
    [dispatch]
  )

  return (
    <VStack align="end" gap={"16"}>
      <HStack className={styles.EditableAlbum} gap={"16"}>
        <button onClick={togleEditAvatar}>
          <Avatar
            noBorder
            size={AvatarSize.L}
            square
            avatar={image || album?.image}
          />
        </button>
        <VStack fullWidth gap={"16"} align="stretch">
          <Input
            label={t("name")}
            placeholder={t("AddName")}
            value={title}
            onValueChange={hundleSetTitle}
          />
          <TextArea
            className={styles.description}
            placeholder={t("description")}
          />
        </VStack>
      </HStack>
      <Button onClick={hundleSave}>{t("save")}</Button>
      <CropImageModal
        onLoad={hundleUploadImage}
        onClose={togleEditAvatar}
        isOpen={avatarModalOpen}
      />
    </VStack>
  )
}
