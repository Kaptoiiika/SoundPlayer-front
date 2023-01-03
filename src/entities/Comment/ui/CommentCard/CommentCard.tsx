import { memo } from "react"
import { CommentModel } from "entities/Comment/model/types/CommentModel"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./CommentCard.module.scss"

type CommentCardProps = {
  className?: string
  comment?: CommentModel
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment } = props

  if (!comment) {
    return (
      <div className={classNames([styles.CommentCard, className])}>
        <Avatar size={AvatarSize.S} />
        <div className={styles.content}>
          <Skeleton width={220} height={"20px"} />
          <Skeleton width={"100%"} height={"32px"} />
        </div>
      </div>
    )
  }

  return (
    <div className={classNames([styles.CommentCard, className])}>
      <Avatar src={comment.author.avatar?.url} size={AvatarSize.S} />
      <div>
        <AppLink to={RoutePaths.proifle + comment.author.id}>
          {comment.author.username}
        </AppLink>
        <pre>
          <Typography>{comment.text}</Typography>
        </pre>
      </div>
    </div>
  )
})
