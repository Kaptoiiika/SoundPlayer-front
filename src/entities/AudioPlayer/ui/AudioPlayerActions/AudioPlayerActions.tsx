import { audioPlayerActions } from "entities/AudioPlayer/model/slice/audioPlayerSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Button } from "shared/ui/Button/Button"
import styles from "./AudioPlayerActions.module.scss"

export const AudioPlayerActions = () => {
  const dispatch = useAppDispatch()
  const hundlePlay = () => {
    dispatch(audioPlayerActions.playCurrentAudio())
  }

  return (
    <div className={styles.AudioPlayerActions}>
      <Button onClick={hundlePlay}>{"Play"}</Button>
    </div>
  )
}
