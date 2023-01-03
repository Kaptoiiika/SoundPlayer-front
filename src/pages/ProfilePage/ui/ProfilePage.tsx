import { useParams } from "react-router-dom"
import { PageWrapper } from "widgets/Page"
import { EditableProfile } from "features/EditableProfile"
import { Profile } from "entities/Profile"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { HStack } from "shared/ui/Stack"
import styles from "./ProfilePage.module.scss"

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const AuthProfile = location.pathname === RoutePaths.my_profile

  if (AuthProfile) {
    return (
      <PageWrapper className={styles.ProfilePage}>
        <HStack justify="center">
          <EditableProfile />
        </HStack>
      </PageWrapper>
    )
  }

  if (!id) return <div>{"not found"}</div>

  return (
    <PageWrapper>
      <HStack justify="center">
        <Profile id={id} />
      </HStack>
    </PageWrapper>
  )
}
