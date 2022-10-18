import { useTranslation } from "react-i18next"

const AudioPage = () => {
  const { t } = useTranslation()

  return <div>{t("AudioPage")}</div>
}

export default AudioPage
