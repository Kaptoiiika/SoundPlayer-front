import { AuthorizationByUsername } from "features/AuthByUsername"
import styles from "./AuthorizationPage.module.scss"

export const AuthorizationPage = () => {
  return (
    <div className={styles.AuthorizationPage}>
      <AuthorizationByUsername />
    </div>
  )
}
