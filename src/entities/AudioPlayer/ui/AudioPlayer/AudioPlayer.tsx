import { audioPlayerReducer } from "@/entities/AudioPlayer/model/slice/audioPlayerSlice"
import { useDynamicModuleLoader } from "@/shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { AudioPlayerActions } from "../AudioPlayerActions/AudioPlayerActions"
import { AudioPlayerComponent } from "../AudioPlayerComponent/AudioPlayerComponent"
import { AudioPlayerSlider } from "../AudioPlayerSlider/AudioPlayerSlider"
import { AudioPlayerVolume } from "../AudioPlayerVolume/AudioPlayerVolume"
import styles from "./AudioPlayer.module.scss"


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
