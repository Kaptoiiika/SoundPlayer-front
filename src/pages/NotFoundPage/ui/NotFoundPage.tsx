import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./NotFoundPage.module.scss"

type NotFoundPageProps = {
  className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames([styles.NotFoundPage, className])}>
      {t("PageNotFound")}
    </div>
  )
}
