import { Profile } from "entities/Profile"
import { EditableProfile } from "features/EditableProfile"
import { useParams } from "react-router-dom"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { PageWrapper } from "shared/ui/Page/Page"
import styles from "./ProfilePage.module.scss"

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const AuthProfile = location.pathname === RoutePaths.my_profile

  if (AuthProfile) {
    return (
      <div className={styles.ProfilePage}>
        <EditableProfile />
      </div>
    )
  }

  if (!id) return <div>{"not found"}</div>

  return (
    <PageWrapper className={styles.ProfilePage}>
      <Profile id={id} />
    </PageWrapper>
  )
}
