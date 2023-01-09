import { memo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./LanguageSwitcher.module.scss"

type LanguageSwitcherProps = {
  className?: string
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <button
      className={classNames([styles.LanguageSwitcher, className], {})}
      onClick={toggle}
    >
      {t("lang")}
    </button>
  )
})
