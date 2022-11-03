import { getAudioList } from "../../model/selectors/getAudioList/getAudioList"
import { fetchAudioList } from "../../model/services/fetchAudioList/fetchAudioList"
import { memo, useEffect } from "react"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import styles from "./AudioList.module.scss"

type AudioListProps = {
  className?: string
}

export const AudioList = memo((props: AudioListProps) => {
  const audioList = useSelector(getAudioList)
  const { className = "" } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAudioList({}))
    console.log(dispatch)
  }, [dispatch])

  return (
    <div className={classNames([styles.AudioList, className])}>
      {audioList.map((audioItem) => (
        <div key={audioItem.id}>{audioItem.fileName}</div>
      ))}
    </div>
  )
})
