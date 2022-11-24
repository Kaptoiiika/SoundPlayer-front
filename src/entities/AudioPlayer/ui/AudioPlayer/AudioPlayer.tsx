import { AudioPlayerVolume } from "../AudioPlayerVolume/AudioPlayerVolume"
import { AudioPlayerSlider } from "../AudioPlayerSlider/AudioPlayerSlider"
import styles from "./AudioPlayer.module.scss"
import { AudioPlayerActions } from "../AudioPlayerActions/AudioPlayerActions"

import { AudioPlayerComponent } from "../AudioPlayerComponent/AudioPlayerComponent"
import { audioPlayerReducer } from "entities/AudioPlayer/model/slice/audioPlayerSlice"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "

export const AudioPlayer = () => {
  useDynamicModuleLoader({ reducers: { audioPlayer: audioPlayerReducer } })

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
