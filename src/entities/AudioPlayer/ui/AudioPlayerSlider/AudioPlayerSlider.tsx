import {
  getAudioPlayerCurrentDuration,
  getAudioPlayerCurrentTime,
} from "entities/AudioPlayer/model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "entities/AudioPlayer/model/slice/audioPlayerSlice"
import { ChangeEvent, useCallback } from "react"
import { useSelector } from "react-redux"
import { formatSToMMSS } from "shared/lib/formaters/formatTime/formatTime"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./AudioPlayerSlider.module.scss"

export const AudioPlayerSlider = () => {
  const dispatch = useAppDispatch()
  const time = useSelector(getAudioPlayerCurrentTime)
  const duration = useSelector(getAudioPlayerCurrentDuration)
  const durationInS = duration / 1000

  const hundleChangeTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newTime = Number(e.target.value)
      if (newTime != NaN) dispatch(audioPlayerActions.setTime(newTime))
    },
    [dispatch]
  )
  
  return (
    <div className={styles.AudioPlayerSlider}>
      <Typography className={styles.time}>{formatSToMMSS(time)}</Typography>

      <input
        className={styles.audioProgress}
        type="range"
        value={time}
        onChange={hundleChangeTime}
        min={0}
        max={durationInS}
      />

      <Typography className={styles.time}>
        {formatSToMMSS(Math.max(durationInS - time, 0))}
      </Typography>
    </div>
  )
}
