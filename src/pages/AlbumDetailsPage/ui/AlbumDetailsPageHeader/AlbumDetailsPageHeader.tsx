import { getSelectedAlbumDetails } from "entities/Album"
import { fetchAlbumById } from "entities/Album"
import { EditableAlbumModal } from "features/EditableAlbum/ui/EditableAlbumModal/EditableAlbumModal"
import { getCanEditAlbum } from "pages/AlbumDetailsPage/model/selectors/album"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Button } from "shared/ui/Button/Button"
import styles from "./AlbumDetailsPageHeader.module.scss"

type AlbumDetailsPageHeaderProps = {
  className?: string
}

export const AlbumDetailsPageHeader = (props: AlbumDetailsPageHeaderProps) => {
  const { className = "" } = props
  const { t } = useTranslation()
  const [editAlbumOpen, setAlbumModalOpen] = useState(false)
  const canEdit = useSelector(getCanEditAlbum)
  const album = useSelector(getSelectedAlbumDetails)
  const dispatch = useAppDispatch()

  const togleEditAlbum = useCallback(() => {
    setAlbumModalOpen((prev) => !prev)
  }, [])

  const updateAlbumInfo = useCallback(() => {
    if (album?.id)
      dispatch(fetchAlbumById({ id: String(album.id), replace: true }))

    setAlbumModalOpen(false)
  }, [album, dispatch])

  return (
    <div className={classNames([styles.AlbumDetailsPageHeader, className])}>
      <AppLink to={RoutePaths.albums}>{t("backToList")}</AppLink>
      {canEdit && album && (
        <>
          <Button onClick={togleEditAlbum}>{t("edit")}</Button>
          <EditableAlbumModal
            onSave={updateAlbumInfo}
            isOpen={editAlbumOpen}
            onClose={togleEditAlbum}
            album={album}
          />
        </>
      )}
    </div>
  )
}
