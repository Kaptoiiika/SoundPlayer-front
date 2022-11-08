import { UserModel } from "entities/User"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProfileCard.module.scss"

type ProfileCardProps = {
  className?: string
  user: UserModel
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className = "", user } = props
  const { email, id, username, avatar } = user
  return <div className={classNames(["", className])}></div>
}
