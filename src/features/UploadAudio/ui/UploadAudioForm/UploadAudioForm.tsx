import { uploadAudioActions } from "../../model/slice/UploadAudioSlice"
import { ChangeEvent, FormEvent, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import styles from "./UploadAudioForm.module.scss"
import { getUploadFormState } from "../../model/selectors/getUploadFormState/getUploadFormState"
import { UploadAudioToServer } from "features/UploadAudio/model/services/UploadAudioToServer/UploadAudioToServer"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { Typography, TypographyTypes } from "shared/ui/Typography/Typography"

type UploadAudioFormProps = {
  className?: string
}

export const UploadAudioForm = memo((props: UploadAudioFormProps) => {
  const { className = "" } = props
  const dispatch = useAppDispatch()
  const { name, audio, error, isloading, audioIsLoaded } =
    useSelector(getUploadFormState)
  const { t } = useTranslation()

  const onNameChange = useCallback(
    (newValue: string) => {
      dispatch(uploadAudioActions.setAudioName(newValue))
    },
    [dispatch]
  )

  const onAudioChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const audioFile = e.currentTarget.files?.[0]

      if (!audioFile) return
      dispatch(
        uploadAudioActions.setAudioFile({
          name: audioFile.name,
          blob: audioFile,
        })
      )
    },
    [dispatch]
  )

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!audio)
        return dispatch(
          uploadAudioActions.setValidationError(t("loadAudioFirst"))
        )

      dispatch(
        UploadAudioToServer({
          audio: audio.blob,
          name: name,
        })
      )
    },
    [audio, dispatch, name, t]
  )

  return (
    <form
      onSubmit={onSubmit}
      className={classNames([styles.UploadAudioForm, className])}
    >
      <Input
        label={t("audioName")}
        autoFocus
        onValueChange={onNameChange}
        value={name}
      />
      <Input label={audio?.name} type="file" onChange={onAudioChange} />
      {error && <Typography type={TypographyTypes.ERROR}>{error}</Typography>}

      <Button type="submit" disabled={!!isloading || !audioIsLoaded}>
        {t("uploadAudio")}
      </Button>
    </form>
  )
})
