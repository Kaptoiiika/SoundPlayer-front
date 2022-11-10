import { getCurrentWaveform } from "entities/AudioPlayer"
import { useSelector } from "react-redux"
import { Waveform } from "shared/ui/Waveform/Waveform"
import styles from "./AudioPlayer.module.scss"

export const FooterAudioPlayer = () => {
  const waveform = useSelector(getCurrentWaveform)

  return (
    <div className={styles.AudioPlayer}>
      {/* <Equalizer /> */}
      <div className="audio-player-waveform">
        <Waveform dataArray={waveform} barOffset={2} />
      </div>
      <div>
        <input
          type="range"
          // value={volume}
          step={0.01}
          min={0}
          max={1}
          // onChange={(e) => audioPlayer.setVolume(Number(e.currentTarget.value))}
        />
      </div>
    </div>
  )
}
