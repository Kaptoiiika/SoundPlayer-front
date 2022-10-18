import { useTranslation } from "react-i18next"

export const HomePage = () => {
  const { t } = useTranslation()

  return <div>{t("HomePage")}</div>
}

export default HomePage
