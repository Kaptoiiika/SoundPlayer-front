import { AlbumList } from "entities/Album"
import { useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { PageWrapper } from "widgets/Page"
import { Typography, TypographyAlign } from "shared/ui/Typography/Typography"
import {
  getAlbumHasMany,
  getAlbumIsError,
  getAlbumIsLoading,
  getAlbumList,
  getAlbumPageNum,
} from "../model/selectors/albumPageSelectors"
import { fetchAlbumList } from "../model/services/fetchAlbumList/fetchAlbumList"
import {
  albumPageActions,
  albumPageReducer,
} from "../model/slice/albumPageSlice"

export const AlbumPage = () => {
  useDynamicModuleLoader({ reducers: { albumPage: albumPageReducer } })
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const albumList = useSelector(getAlbumList.selectAll)
  const isLoading = useSelector(getAlbumIsLoading)
  const error = useSelector(getAlbumIsError)
  const page = useSelector(getAlbumPageNum)
  const hasMany = useSelector(getAlbumHasMany)

  useEffect(() => {
    dispatch(fetchAlbumList({}))
  }, [dispatch])

  const onLoadNextPage = useCallback(() => {
    if (hasMany) {
      dispatch(fetchAlbumList({ page: page + 1 }))
      dispatch(albumPageActions.setPage(page + 1))
    }
  }, [dispatch, hasMany, page])

  return (
    <PageWrapper onScrollEnd={onLoadNextPage}>
      {error && (
        <>
          <Typography align={TypographyAlign.CENTER}>
            {t("errorOnLoadAlbum")}
          </Typography>
          <Typography align={TypographyAlign.CENTER}>{error}</Typography>
        </>
      )}

      <AlbumList isLoading={isLoading} albums={albumList} />
    </PageWrapper>
  )
}
