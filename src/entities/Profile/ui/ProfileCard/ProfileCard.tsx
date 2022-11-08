import { UserModel } from "entities/User"
import { classNames } from "shared/lib/classNames/classNames"
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar"
import { Paper } from "shared/ui/Paper/Paper"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./ProfileCard.module.scss"

type ProfileCardProps = {
  className?: string
  user: UserModel
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className = "", user } = props
  const { username, avatar } = user

  return (
    <Paper className={classNames([styles.ProfileCard, className])}>
      <div className={styles.header}>
        <Avatar className={styles.avatar} size={AvatarSize.M} avatar={avatar} />
      </div>
      <div className={styles.info}>
        <Typography bold oneLine>
          {username}
        </Typography>
      </div>
    </Paper>
  )
}
