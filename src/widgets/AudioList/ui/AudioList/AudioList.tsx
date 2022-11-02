import { getAudioList } from "entities/Audio"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AudioList.module.scss"

type AudioListProps = {
  className?: string
}

export const AudioList = (props: AudioListProps) => {
  const audioList = useSelector(getAudioList)
  const { className = "" } = props
  return (
    <div className={classNames([styles.AudioList, className])}>
      {audioList.map((audioItem) => (
        <div key={audioItem.id}>{audioItem.fileName}</div>
      ))}
    </div>
  )
}
