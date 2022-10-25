import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./PageError.module.scss"

type PageErrorProps = {
  className?: string
}

export const PageError = (props: PageErrorProps) => {
  const { className = "" } = props
  const { t } = useTranslation()
  return (
    <div className={classNames([styles.PageError, className])}>
      {t("ErrorPageMessage")}
    </div>
  )
}
