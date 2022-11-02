import { UploadAudioModal } from "features/UploadAudio"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { AudioList } from "widgets/AudioList"
import styles from "./AudioPage.module.scss"

const AudioPage = () => {
  const { t } = useTranslation()

  const [uploadModalisOpen, setUploadAudioModalOpen] = useState(false)

  const hundleTogleUploadModal = useCallback(() => {
    setUploadAudioModalOpen((newValue) => !newValue)
  }, [])

  return (
    <div className={classNames(styles.AudioPage)}>
      <AudioList />
      <Button onClick={hundleTogleUploadModal}>{t("uploadAudio")}</Button>
      <UploadAudioModal
        isOpen={uploadModalisOpen}
        onClose={hundleTogleUploadModal}
      />
    </div>
  )
}

export default AudioPage
