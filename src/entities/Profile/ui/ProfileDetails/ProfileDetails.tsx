import { UserModel } from "entities/User"
import { profileReducer } from "../../model/slice/ProfileSlice"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Button } from "shared/ui/Button/Button"
import { ProfileCard } from "../ProfileCard/ProfileCard"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { UpdateProfileAvatar } from "entities/Profile/model/services/UpdateProfileAvatar/UpdateProfileAvatar"
import { CropImageModal } from "shared/ui/CropImage"

type ProfileDetailsProps = {
  className?: string
  id?: number | string
}

export const ProfileDetails = (props: ProfileDetailsProps) => {
  useDynamicModuleLoader({ reducers: { profile: profileReducer } })
  const { className = "", id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const [imageUploadIsOpen, setUploadImageOpen] = useState(false)

  useEffect(() => {
    // dispatch()
  }, [id, dispatch])

  const user: UserModel = { email: "asd", id: 2, username: "asd" }

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
    <div className={classNames(className)}>
      <div>
        <Button onClick={hundleOpenUploadImage}>{t("changeavatar")}</Button>
      </div>
      <ProfileCard user={user} />
      <CropImageModal
        isOpen={imageUploadIsOpen}
        onClose={hundleCloseUploadImage}
        onLoad={hundleUploadImage}
        initalSrc={user && `${__API_URL__}api/file/avatar/${user.avatar}`}
      />
    </div>
  )
}
