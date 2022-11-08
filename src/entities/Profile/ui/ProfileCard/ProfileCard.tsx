import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProfileCard.module.scss"

type ProfileCardProps = {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className = "" } = props
  return <div className={classNames(["", className])}></div>
}
