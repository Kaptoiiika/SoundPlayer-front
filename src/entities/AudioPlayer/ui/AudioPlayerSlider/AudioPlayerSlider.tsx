import {
  getAudioPlayerCurrentDuration,
  getAudioPlayerCurrentTime,
} from "entities/AudioPlayer/model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "entities/AudioPlayer/model/slice/audioPlayerSlice"
import { ChangeEvent, useCallback } from "react"
import { useSelector } from "react-redux"
import { formatMsToMMSS } from "shared/lib/formaters/formatTime/formatTime"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./AudioPlayerSlider.module.scss"

export const AudioPlayerSlider = () => {
  const dispatch = useAppDispatch()
  const time = useSelector(getAudioPlayerCurrentTime)
  const duration = useSelector(getAudioPlayerCurrentDuration)

  const hundleChangeTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newTime = Number(e.target.value)
      if (newTime != NaN) dispatch(audioPlayerActions.setTime(newTime))
    },
    [dispatch]
  )

  return (
    <div className={styles.AudioPlayerSlider}>
      <Typography className={styles.time}>{formatMsToMMSS(time)}</Typography>

      <input
        className={styles.audioProgress}
        type="range"
        value={time}
        onChange={hundleChangeTime}
        min={0}
        max={duration / 1000}
      />

      <Typography className={styles.time}>
        {formatMsToMMSS(Math.max(duration - time, 0))}
      </Typography>
    </div>
  )
}
