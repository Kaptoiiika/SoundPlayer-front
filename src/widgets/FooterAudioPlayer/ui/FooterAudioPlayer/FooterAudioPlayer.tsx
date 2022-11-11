import { AudioPlayer } from "entities/AudioPlayer"
import styles from "./AudioPlayer.module.scss"

export const FooterAudioPlayer = () => {
  return (
    <div className={styles.AudioPlayer}>
      <AudioPlayer />
    </div>
  )
}
