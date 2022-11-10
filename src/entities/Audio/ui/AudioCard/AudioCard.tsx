import { AudioModel } from "../../model/types/audioModel"
import { Paper } from "shared/ui/Paper/Paper"
import styles from "./AudioCard.module.scss"
import { memo } from "react"
import { Button } from "shared/ui/Button/Button"
import DefaultAudioIcon from "shared/assets/icons/DefaultAudioIcon.png"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { audioPlayerActions } from "entities/AudioPlayer"
type AudioCardProps = {
  audio: AudioModel
}

export const AudioCard = memo((props: AudioCardProps) => {
  const { audio } = props
  const dispatch = useAppDispatch()

  const hundlePlay = () => {
    dispatch(audioPlayerActions.setCurrentAudio(audio))
  }

  return (
    <Paper className={styles.AudioCard}>
      <div className={styles.image}>
        <img src={DefaultAudioIcon} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>{audio.name}</div>
        <div className={styles.actions}>
          <Button onClick={hundlePlay}>E</Button>
        </div>
      </div>
    </Paper>
  )
})
