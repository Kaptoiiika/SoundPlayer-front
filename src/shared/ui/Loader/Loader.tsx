import { classNames } from "shared/lib/classNames/classNames"
import LoaderBars from "shared/assets/icons/LoaderBars.svg"
import styles from "./Loader.module.scss"

type LoaderProps = {
  className?: string
}

export const Loader = (props: LoaderProps) => {
  const { className = "" } = props
  return (
    <div className={classNames([styles.Loader, className])}>
      <LoaderBars />
    </div>
  )
}
