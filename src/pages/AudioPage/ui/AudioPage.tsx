import { Audio } from "entities/Audio"
import { useTranslation } from "react-i18next"

const AudioPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Audio />
    </div>
  )
}

export default AudioPage
