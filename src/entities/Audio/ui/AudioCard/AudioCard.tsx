import { AudioModel } from "../../model/types/audioModel"
import { Paper } from "shared/ui/Paper/Paper"
import styles from "./AudioCard.module.scss"
import { memo } from "react"
import { Button } from "shared/ui/Button/Button"
import DefaultAudioIcon from "shared/assets/icons/DefaultAudioIcon.png"

type AudioCardProps = {
  audio: AudioModel
  onPlay: (audio: AudioModel) => void
}

export const AudioCard = memo((props: AudioCardProps) => {
  const { audio, onPlay } = props

  const hundlePlay = () => {
    onPlay?.(audio)
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
