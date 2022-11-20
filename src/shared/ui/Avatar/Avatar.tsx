import { memo, SyntheticEvent } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Avatar.module.scss"

export const enum AvatarSize {
  M = "sizeM",
  L = "sizeL",
  AUTO = "sizeAuto"
}

type AvatarProps = {
  src?: string
  className?: string
  size?: AvatarSize
}

const emptyImg =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export const Avatar = memo((props: AvatarProps) => {
  const { className = "", src: avatar, size = AvatarSize.M } = props
  const src = `${__API_URL__}api/file/avatar/${avatar}`

  const hundleErrorLoadImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = emptyImg
  }

  return (
    <img
      className={classNames([styles.Avatar, styles[size], className])}
      src={src}
      onError={hundleErrorLoadImage}
      alt={""}
    />
  )
})
