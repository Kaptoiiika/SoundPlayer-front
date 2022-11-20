import {
  getAlbumDetailsData,
  getAlbumDetailsError,
  getAlbumDetailsIsLoading,
} from "entities/Album/model/selectors/getAlbumDetails/getAlbumDetails"
import { fetchAlbumById } from "entities/Album/model/services/fetchAlbumById/fetchAlbumById"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import {
  Typography,
  TypographyAlign,
  TypographySize,
} from "shared/ui/Typography/Typography"
import styles from "./AlbumDetails.module.scss"

type AlbumDetailsProps = {
  className?: string
  id: string
}

export const AlbumDetails = (props: AlbumDetailsProps) => {
  const { className = "", id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const album = useSelector(getAlbumDetailsData)
  const isLoading = useSelector(getAlbumDetailsIsLoading)
  const error = useSelector(getAlbumDetailsError)

  useEffect(() => {
    dispatch(fetchAlbumById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div className={styles.AlbumDetails}>
        <div className={styles.header}>
          <Skeleton className={styles.avatarWrapper} />
          <div className={styles.info}>
            <Skeleton className={styles.title} />
            <Skeleton className={styles.author} />
            <Skeleton className={styles.author} />
          </div>
        </div>
        <div className={styles.content}>
          <Skeleton className={styles.trackList} />
        </div>
      </div>
    )
  } else if (error || !album) {
    content = (
      <Typography align={TypographyAlign.CENTER}>
        {t("errorOnLoadAlbum")}
      </Typography>
    )
  } else {
    content = (
      <>
        <div className={styles.AlbumDetails}>
          <div className={styles.header}>
            <div className={styles.avatarWrapper}>
              <Avatar
                src={album.image}
                className={styles.avatar}
                size={AvatarSize.L}
              />
            </div>
            <div className={styles.info}>
              <Typography className={styles.title} bold size={TypographySize.L}>
                {album.title}
              </Typography>
              <Typography className={styles.author} size={TypographySize.M}>
                {album.authorId}
              </Typography>
            </div>
          </div>
          <div className={styles.content}>
            <Skeleton className={styles.trackList} />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={classNames([styles.AlbumDetails, className])}>
      {content}
    </div>
  )
}
