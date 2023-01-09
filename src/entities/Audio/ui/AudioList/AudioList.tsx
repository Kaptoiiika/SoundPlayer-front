import { memo, useCallback } from "react"
import { AudioModel } from "@/entities/Audio"
import { audioPlayerActions } from "@/entities/AudioPlayer"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { AudioCard } from "../AudioCard/AudioCard"
import styles from "./AudioList.module.scss"

type AudioListProps = {
  className?: string
  audioList?: AudioModel[]
}

export const AudioList = memo((props: AudioListProps) => {
  const { className, audioList } = props
  const dispatch = useAppDispatch()

  const hundlePlay = useCallback(
    (audio: AudioModel) => {
      dispatch(audioPlayerActions.setCurrentAudioAndPlay(audio))
      audioList && dispatch(audioPlayerActions.setPlayList(audioList))
    },
    [dispatch, audioList]
  )

  return (
    <div className={classNames([styles.AudioList, className])}>
      {audioList?.map((audioItem) => (
        <AudioCard key={audioItem.id} audio={audioItem} onPlay={hundlePlay} />
      ))}
    </div>
  )
})
