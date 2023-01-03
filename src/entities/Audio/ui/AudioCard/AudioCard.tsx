import { memo } from "react"
import DefaultAudioIcon from "shared/assets/icons/DefaultAudioIcon.png"
import { Button } from "shared/ui/Button/Button"
import { Paper } from "shared/ui/Paper/Paper"
import { Dropdown } from "shared/ui/Popups"
import { HStack } from "shared/ui/Stack"
import { AudioModel } from "../../model/types/audioModel"
import styles from "./AudioCard.module.scss"

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
        <div className={styles.info}>{audio.title}</div>
        <HStack justify="between" className={styles.actions}>
          <Button onClick={hundlePlay}>E</Button>
          <Dropdown
            items={[{ content: "Play next" }]}
            label={"..."}
            directions={{ horizontal: "right", vertical: "bottom" }}
          />
        </HStack>
      </div>
    </Paper>
  )
})
