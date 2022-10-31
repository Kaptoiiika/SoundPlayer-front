import { UploadAudioModal } from "features/UploadAudio"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"

const AudioPage = () => {
  const { t } = useTranslation()

  const [uploadModalisOpen, setUploadAudioModalOpen] = useState(false)

  const hundleTogleUploadModal = () => {
    setUploadAudioModalOpen((newValue) => !newValue)
  }

  return (
    <div>
      <Button onClick={hundleTogleUploadModal}>{t("uploadAudio")}</Button>
      <UploadAudioModal
        isOpen={uploadModalisOpen}
        onClose={hundleTogleUploadModal}
      />
    </div>
  )
}

export default AudioPage
