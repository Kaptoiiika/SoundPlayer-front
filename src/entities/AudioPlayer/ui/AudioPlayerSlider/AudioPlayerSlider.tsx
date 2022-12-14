import { useCallback } from "react"
import { useSelector } from "react-redux"
import {
  getAudioPlayerCurrentDuration,
  getAudioPlayerCurrentTime,
} from "@/entities/AudioPlayer/model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "@/entities/AudioPlayer/model/slice/audioPlayerSlice"
import { formatSToMMSS } from "@/shared/lib/formaters/formatTime/formatTime"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Slider } from "@/shared/ui/Slider/Slider"
import { Typography, TypographyAlign } from "@/shared/ui/Typography/Typography"
import styles from "./AudioPlayerSlider.module.scss"

export const AudioPlayerSlider = () => {
  const dispatch = useAppDispatch()
  const time = useSelector(getAudioPlayerCurrentTime)
  const duration = useSelector(getAudioPlayerCurrentDuration)
  const durationInS = duration / 1000

  const hundleChangeTime = useCallback(
    (newValue: number) => {
      dispatch(audioPlayerActions.changeTime(newValue))
    },
    [dispatch]
  )

  return (
    <div className={styles.AudioPlayerSlider}>
      <Typography align={TypographyAlign.RIGHT} className={styles.time}>
        {formatSToMMSS(time)}
      </Typography>

      <Slider
        className={styles.audioProgress}
        onValueChange={hundleChangeTime}
        value={time}
        min={0}
        max={durationInS}
      />

      <Typography className={styles.time}>
        {formatSToMMSS(Math.max(durationInS - time, 0))}
      </Typography>
    </div>
  )
}
