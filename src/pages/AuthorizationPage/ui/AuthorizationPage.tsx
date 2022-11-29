import { AuthorizationByUsername } from "features/AuthByUsername"
import { PageWrapper } from "widgets/Page"
import styles from "./AuthorizationPage.module.scss"

export const AuthorizationPage = () => {
  return (
    <PageWrapper className={styles.AuthorizationPage}>
      <AuthorizationByUsername />
    </PageWrapper>
  )
}
