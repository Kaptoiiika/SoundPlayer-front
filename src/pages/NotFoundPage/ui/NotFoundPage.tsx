import { useTranslation } from "react-i18next"
import { PageWrapper } from "widgets/Page"
import { HStack } from "shared/ui/Stack"
import styles from "./NotFoundPage.module.scss"

export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper className={styles.NotFoundPage}>
      <HStack justify="center">{t("PageNotFound")}</HStack>
    </PageWrapper>
  )
}
