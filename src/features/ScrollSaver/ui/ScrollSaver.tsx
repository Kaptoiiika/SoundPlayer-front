import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { getScrollSaverByPath } from "../model/selectors/scrollSaverSelectors"
import styles from "./ScrollSaver.module.scss"

type ScrollSaverProps = {
  className?: string
}

export const ScrollSaver = (props: ScrollSaverProps) => {
  const { className = "" } = props

  return <div className={classNames(["", className])}></div>
}
