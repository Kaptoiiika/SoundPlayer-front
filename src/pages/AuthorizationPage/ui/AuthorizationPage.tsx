import { AuthorizationByUsername } from "features/AuthByUsername"
import { PageWrapper } from "shared/ui/Page/Page"
import styles from "./AuthorizationPage.module.scss"

export const AuthorizationPage = () => {
  return (
    <PageWrapper className={styles.AuthorizationPage}>
      <AuthorizationByUsername />
    </PageWrapper>
  )
}
