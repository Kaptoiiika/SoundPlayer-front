import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { fetchAlbumById } from "@/entities/Album/model/services/fetchAlbumById/fetchAlbumById"
import { albumReducer } from "@/entities/Album/model/slice/albumSlice"
import { AudioList } from "@/entities/Audio"
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "@/shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink"
import { Avatar, AvatarSize } from "@/shared/ui/Avatar/Avatar"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import {
  Typography,
  TypographyAlign,
  TypographySize,
} from "@/shared/ui/Typography/Typography"
import {
  getAlbumDetailsError,
  getAlbumDetailsIsLoading,
  getSelectedAlbumDetails,
} from "../../model/selectors/getAlbumDetails/getAlbumDetails"
import styles from "./AlbumDetails.module.scss"

type AlbumDetailsProps = {
  className?: string
  id: string
}

export const AlbumDetails = (props: AlbumDetailsProps) => {
  useDynamicModuleLoader({ reducers: { albumDetails: albumReducer } })
  const { className, id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const album = useSelector(getSelectedAlbumDetails)
  const isLoading = useSelector(getAlbumDetailsIsLoading)
  const error = useSelector(getAlbumDetailsError)

  useEffect(() => {
    dispatch(fetchAlbumById({ id: id }))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div className={styles.AlbumDetails}>
        <div className={styles.header}>
          <Avatar square size={AvatarSize.L} />
          <div className={styles.info}>
            <Skeleton className={styles.title} />
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
      <>
        <Typography align={TypographyAlign.CENTER}>
          {t("errorOnLoadAlbum")}
        </Typography>
        <Typography align={TypographyAlign.CENTER}>{error}</Typography>
      </>
    )
  } else {
    content = (
      <>
        <div className={styles.AlbumDetails}>
          <div className={styles.header}>
            <Avatar
              square
              avatar={album.image}
              className={styles.avatar}
              size={AvatarSize.L}
            />
            <div className={styles.info}>
              <Typography className={styles.title} bold size={TypographySize.L}>
                {album.title}
              </Typography>
              {album.author?.id && (
                <AppLink
                  to={RoutePaths.proifle + album.author?.id}
                  className={styles.author}
                  variant={AppLinkTheme.SECONDARY}
                >
                  {album.author?.username || t("unknownAuthor")}
                </AppLink>
              )}
            </div>
          </div>
          <div className={styles.content}>
            <AudioList audioList={album.audioList} />
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
