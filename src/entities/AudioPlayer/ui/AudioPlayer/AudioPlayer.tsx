import { AudioPlayerVolume } from "../AudioPlayerVolume/AudioPlayerVolume"
import { AudioPlayerSlider } from "../AudioPlayerSlider/AudioPlayerSlider"
import styles from "./AudioPlayer.module.scss"
import { AudioPlayerActions } from "../AudioPlayerActions/AudioPlayerActions"

import { AudioPlayerComponent } from "../AudioPlayerComponent/AudioPlayerComponent"

export const AudioPlayer = () => {
  return (
    <div className={styles.AudioPlayer}>
      <AudioPlayerComponent />
      {/* <Equalizer /> */}
      <div className={styles.audioInfo}>{"audioInfo"}</div>
      <div className={styles.actions}>
        <AudioPlayerActions />
        <AudioPlayerSlider />
      </div>
      <div className={styles.volume}>
        <AudioPlayerVolume />
      </div>
    </div>
  )
}
