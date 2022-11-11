import { AudioPlayerVolume } from "../AudioPlayerVolume/AudioPlayerVolume"
import { AudioPlayerSlider } from "../AudioPlayerSlider/AudioPlayerSlider"
import styles from "./AudioPlayer.module.scss"
import { AudioPlayerActions } from "../AudioPlayerActions/AudioPlayerActions"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import {
  getAudioPlayerCurrentTime,
  getAudioPlayerCurrentAudio,
  getAudioPlayerIsPlaying,
  getAudioPlayerVolume,
} from "../../model/selectors/getAudioPlayerData/getAudioPlayerData"

export const AudioPlayer = () => {
  const { current: player } = useRef(new Audio())
  const currentAudioData = useSelector(getAudioPlayerCurrentAudio)
  const currentTime = useSelector(getAudioPlayerCurrentTime)
  const isPlaying = useSelector(getAudioPlayerIsPlaying)
  const volume = useSelector(getAudioPlayerVolume)

  useEffect(() => {
    player.src = `${__API_URL__}api/uploads/audio/${currentAudioData?.fileName}`
  }, [currentAudioData, player])

  useEffect(() => {
    player.currentTime = currentTime
  }, [currentTime, player])

  useEffect(() => {
    if (isPlaying) player.play()
    else player.pause()
  }, [isPlaying, player])

  useEffect(() => {
    player.volume = volume
  }, [volume, player])

  return (
    <div className={styles.AudioPlayer}>
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
