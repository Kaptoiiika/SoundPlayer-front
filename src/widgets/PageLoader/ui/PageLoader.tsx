import { classNames } from "shared/lib/classNames/classNames"
import styles from "./PageLoader.module.scss"
import LoaderBars from "shared/assets/icons/LoaderBars.svg"

type PageLoaderProps = {
  className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className = "" } = props
  return (
    <div className={classNames([styles.PageLoader, className])}>
      <LoaderBars className={styles.icon} />
    </div>
  )
}
