import { Profile } from "entities/Profile"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Button } from "shared/ui/Button/Button"
import { CropImageModal } from "shared/ui/CropImage"
import { UpdateProfileAvatar } from "../model/services/UpdateProfileAvatar/UpdateProfileAvatar"
import { editableProfileReducer } from "../model/slice/editableProfileSlice"
import styles from "./EditableProfile.module.scss"

type EditableProfileProps = {
  className?: string
}

export const EditableProfile = (props: EditableProfileProps) => {
  useDynamicModuleLoader({
    reducers: { editableProfileSchema: editableProfileReducer },
  })
  const { className = "" } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const [imageUploadIsOpen, setUploadImageOpen] = useState(false)

  const hundleOpenUploadImage = useCallback(() => {
    setUploadImageOpen(true)
  }, [])

  const hundleCloseUploadImage = useCallback(() => {
    setUploadImageOpen(false)
  }, [])

  const hundleUploadImage = useCallback(
    async (cropedImage: Blob) => {
      await dispatch(UpdateProfileAvatar({ avatar: cropedImage, userId: 2 }))
      setUploadImageOpen(false)
    },
    [dispatch]
  )

  return (
    <div className={classNames(["", className])}>
      <div className={classNames(className)}>
        <Profile />
        <div>
          <Button onClick={hundleOpenUploadImage}>{t("changeavatar")}</Button>
        </div>
        <CropImageModal
          isOpen={imageUploadIsOpen}
          onClose={hundleCloseUploadImage}
          onLoad={hundleUploadImage}
          initalSrc={`${__API_URL__}api/file/avatar/`}
        />
      </div>
    </div>
  )
}
