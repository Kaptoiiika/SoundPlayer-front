import { useSelector } from "react-redux"
import { getAudioPlayerIsPlaying } from "entities/AudioPlayer/model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "entities/AudioPlayer/model/slice/audioPlayerSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Button } from "shared/ui/Button/Button"
import styles from "./AudioPlayerActions.module.scss"

export const AudioPlayerActions = () => {
  const dispatch = useAppDispatch()
  const isPlaying = useSelector(getAudioPlayerIsPlaying)

  const hundlePlay = () => {
    dispatch(audioPlayerActions.playCurrentAudio())
  }

  const hundleStop = () => {
    dispatch(audioPlayerActions.stopCurrentAudio())
  }

  const hundlePlayNext = () => {
    dispatch(audioPlayerActions.playNext())
  }

  const hundlePlayPrev = () => {
    dispatch(audioPlayerActions.playPrev())
  }

  return (
    <div className={styles.AudioPlayerActions}>
      <Button onClick={hundlePlayPrev}>{"prev"}</Button>

      {isPlaying ? (
        <Button onClick={hundleStop}>{"Stop"}</Button>
      ) : (
        <Button onClick={hundlePlay}>{"Play"}</Button>
      )}

      <Button onClick={hundlePlayNext}>{"next"}</Button>
    </div>
  )
}
