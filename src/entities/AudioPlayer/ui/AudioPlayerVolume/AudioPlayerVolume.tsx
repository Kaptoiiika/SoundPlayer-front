import { ChangeEvent } from "react"
import { useSelector } from "react-redux"
import { getAudioPlayerVolume } from "@/entities/AudioPlayer/model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "@/entities/AudioPlayer/model/slice/audioPlayerSlice"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import styles from "./AudioPlayerVolume.module.scss"

export const AudioPlayerVolume = () => {
  const dispatch = useAppDispatch()
  const volume = useSelector(getAudioPlayerVolume)

  const hundleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    dispatch(audioPlayerActions.setVolume(newValue))
  }

  return (
    <input
      className={styles.AudioPlayerVolume}
      type="range"
      value={volume}
      onChange={hundleChangeVolume}
      step={0.01}
      min={0}
      max={1}
    />
  )
}
