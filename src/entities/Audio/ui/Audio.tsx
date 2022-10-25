import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { audioActions } from "../model/slice/audioSlice"
import styles from "./Audio.module.scss"

type AudioProps = {
  className?: string
}

export const Audio = (props: AudioProps) => {
  const { className = "" } = props
  const dispatch = useDispatch()
  const audioName = useSelector((state: StateSchema) => state.audio.name)

  const hundleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    dispatch(audioActions.changeName())
    console.log(newValue)
  }

  const hundleClearName = () => {
    dispatch(audioActions.clearName())
  }

  return (
    <div className={classNames(["", className])}>
      <input type="text" onChange={hundleChangeName} />
      <button onClick={hundleClearName}>{"clear"}</button>
      {audioName}
    </div>
  )
}
