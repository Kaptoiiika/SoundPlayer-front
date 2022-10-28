import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import styles from "./UploadAudioForm.module.scss"

type UploadAudioFormProps = {
  className?: string
}

export const UploadAudioForm = (props: UploadAudioFormProps) => {
  const { className = "" } = props
  const { t } = useTranslation()

  const [name, setName] = useState("")

  const onNameChange = useCallback((newValue: string) => {
    setName(newValue)
  }, [])

  return (
    <div className={classNames([styles.UploadAudioForm, className])}>
      <Input
        label={t("audioName")}
        autoFocus
        onValueChange={onNameChange}
        value={name}
      />{" "}
      <Input
        autoFocus
        onValueChange={onNameChange}
        value={name}
      />
      <Input type="file" />
      <Button>{t("uploadAudio")}</Button>
    </div>
  )
}
