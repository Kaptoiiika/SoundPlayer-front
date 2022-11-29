import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { PageWrapper } from "shared/ui/Page/Page"
import styles from "./NotFoundPage.module.scss"

type NotFoundPageProps = {
  className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className = "" } = props
  const { t } = useTranslation()

  return (
    <PageWrapper className={classNames([styles.NotFoundPage, className])}>
      {t("PageNotFound")}
    </PageWrapper>
  )
}
