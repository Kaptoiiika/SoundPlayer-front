import { memo, SyntheticEvent } from "react"
import { FileRespounce } from "shared/api/types/FilteTypes"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Avatar.module.scss"

export const enum AvatarSize {
  S = "sizeS",
  M = "sizeM",
  L = "sizeL",
  AUTO = "sizeAuto",
}

type AvatarProps = {
  src?: string
  avatar?: FileRespounce
  className?: string
  size?: AvatarSize
  square?: boolean
}

const emptyImg =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export const Avatar = memo((props: AvatarProps) => {
  const { className = "", src, size = AvatarSize.M, square, avatar } = props

  const hundleErrorLoadImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = emptyImg
  }

  const imageSRC = avatar?.formats?.small?.url || avatar?.url || src

  return (
    <img
      className={classNames([styles.Avatar, styles[size], className], {
        [styles.square]: square,
      })}
      src={`${__API_URL__}${imageSRC}`}
      onError={hundleErrorLoadImage}
      alt={""}
    />
  )
})
