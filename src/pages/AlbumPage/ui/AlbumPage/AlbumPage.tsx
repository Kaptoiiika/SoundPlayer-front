import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAlbumPageList } from "pages/AlbumPage/api/albumPageApi"
import { fetchNextArticlesPage } from "pages/AlbumPage/model/services/fetchNextAlbumPage/fetchNextAlbumPage"
import { PageWrapper } from "widgets/Page"
import { AlbumList } from "entities/Album"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { SortOrder } from "shared/types"
import { Typography, TypographyAlign } from "shared/ui/Typography/Typography"
import {
  getAlbumPageLimit,
  getAlbumPageNum,
} from "../../model/selectors/albumPageSelectors"
import { albumPageReducer } from "../../model/slice/albumPageSlice"
import { AlbumPageFilters } from "../AlbumPageFilters/AlbumPageFilters"

export const AlbumPage = () => {
  useDynamicModuleLoader({ reducers: { albumPage: albumPageReducer } })
  const dispatch = useAppDispatch()
  const page = useSelector(getAlbumPageNum)
  const limit = useSelector(getAlbumPageLimit)
  const { isLoading, error, data } = useAlbumPageList({
    limit: limit,
    page: page,
    order: SortOrder.ASC,
  })
  const albumList = data?.data
  const { t } = useTranslation()

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <PageWrapper onScrollEnd={onLoadNextPage}>
      {error && (
        <>
          <Typography align={TypographyAlign.CENTER}>
            {t("errorOnLoadAlbum")}
          </Typography>
          <Typography align={TypographyAlign.CENTER}>
            {String(error)}
          </Typography>
        </>
      )}
      <AlbumPageFilters />

      <AlbumList isLoading={isLoading} albums={albumList} />
    </PageWrapper>
  )
}
