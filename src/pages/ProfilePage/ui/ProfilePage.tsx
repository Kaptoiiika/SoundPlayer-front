import { ProfileCard } from "entities/Profile"
import { getAuthData } from "entities/User"
import { UploadImageModal } from "features/UploadImage"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import styles from "./ProfilePage.module.scss"

type ProfilePageProps = {
  className?: string
}

export const ProfilePage = (props: ProfilePageProps) => {
  const { className = "" } = props
  const [imageUploadIsOpen, setUploadImageOpen] = useState(false)
  const user = useSelector(getAuthData)
  const { t } = useTranslation()

  const hundleOpenUploadImage = useCallback(() => {
    setUploadImageOpen(true)
  }, [])

  const hundleCloseUploadImage = useCallback(() => {
    setUploadImageOpen(false)
  }, [])

  return (
    <div className={classNames([styles.ProfilePage, className])}>
      <div>
        <Button onClick={hundleOpenUploadImage}>{t("changeavatar")}</Button>
        <Input label={t("username")} value={user?.username} />
      </div>
      {user && <ProfileCard user={user} />}
      <UploadImageModal
        isOpen={imageUploadIsOpen}
        onClose={hundleCloseUploadImage}
        initalSrc={user && `${__API_URL__}api/file/avatar/${user.avatar}`}
      />
    </div>
  )
}
