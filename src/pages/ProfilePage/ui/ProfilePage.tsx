import { ProfileDetails } from "entities/Profile"
import { useParams } from "react-router-dom"
import styles from "./ProfilePage.module.scss"

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className={styles.ProfilePage}>
      <ProfileDetails id={id}/>
    </div>
  )
}
