import { AlbumList } from "entities/Album"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Typography, TypographyAlign } from "shared/ui/Typography/Typography"
import {
  getAlbumIsError,
  getAlbumIsLoading,
  getAlbumList,
} from "../model/selectors/getAlbumList/getAlbumList"
import { fetchAlbumList } from "../model/services/fetchAlbumList/fetchAlbumList"
import { albumPageReducer } from "../model/slice/albumPageSlice"

export const AlbumPage = () => {
  useDynamicModuleLoader({ reducers: { albumPage: albumPageReducer } })
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const albumList = useSelector(getAlbumList.selectAll)
  const isLoading = useSelector(getAlbumIsLoading)
  const error = useSelector(getAlbumIsError)

  useEffect(() => {
    dispatch(fetchAlbumList())
  }, [dispatch])

  return (
    <div>
      {error && (
        <>
          <Typography align={TypographyAlign.CENTER}>
            {t("errorOnLoadAlbum")}
          </Typography>
          <Typography align={TypographyAlign.CENTER}>{error}</Typography>
        </>
      )}

      <AlbumList isLoading={isLoading} albums={albumList} />
    </div>
  )
}
