import {
  uploadAudioActions,
  uploadAudioReducer,
} from "../../model/slice/UploadAudioSlice"
import { ChangeEvent, FormEvent, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import styles from "./UploadAudioForm.module.scss"
import { getUploadFormState } from "../../model/selectors/getUploadFormState/getUploadFormState"
import { UploadAudioToServer } from "features/UploadAudio/model/services/UploadAudioToServer/UploadAudioToServer"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Typography, TypographyTypes } from "shared/ui/Typography/Typography"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "

type UploadAudioFormProps = {
  className?: string
  onSuccess?: () => void
}

export const UploadAudioForm = memo((props: UploadAudioFormProps) => {
  useDynamicModuleLoader({ reducers: { audioForm: uploadAudioReducer } })
  const { className = "", onSuccess } = props
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

      const result = await dispatch(
        UploadAudioToServer({
          audio: audio.blob,
          name: name,
        })
      )
      if (result.meta.requestStatus === "fulfilled") {
        onSuccess?.()
      }
    },
    [audio, dispatch, name, onSuccess, t]
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
      <Input
        label={audio?.name}
        type="file"
        accept="audio/mpeg3"
        onChange={onAudioChange}
      />
      {error && <Typography type={TypographyTypes.ERROR}>{error}</Typography>}

      <Button type="submit" disabled={!!isloading || !audioIsLoaded}>
        {t("uploadAudio")}
      </Button>
    </form>
  )
})
