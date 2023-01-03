import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getCanEditAlbum } from "pages/AlbumDetailsPage/model/selectors/album"
import { EditableAlbumModal } from "features/EditableAlbum/ui/EditableAlbumModal/EditableAlbumModal"
import { fetchAlbumById } from "entities/Album"
import { getSelectedAlbumDetails } from "entities/Album"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Button } from "shared/ui/Button/Button"
import { HStack } from "shared/ui/Stack"

export const AlbumDetailsPageHeader = () => {
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
    <HStack justify="between">
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
    </HStack>
  )
}
