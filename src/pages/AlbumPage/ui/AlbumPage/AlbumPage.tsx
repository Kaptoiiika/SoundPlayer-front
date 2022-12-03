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
} from "../../model/selectors/albumPageSelectors"
import { fetchAlbumList } from "../../model/services/fetchAlbumList/fetchAlbumList"
import { albumPageReducer } from "../../model/slice/albumPageSlice"
import { AlbumPageFilters } from "../AlbumPageFilters/AlbumPageFilters"
import styles from "./AlbumPage.module.scss"
import { fetchNextArticlesPage } from "pages/AlbumPage/model/services/fetchNextAlbumPage/fetchNextAlbumPage"

export const AlbumPage = () => {
  useDynamicModuleLoader({ reducers: { albumPage: albumPageReducer } })
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const albumList = useSelector(getAlbumList.selectAll)
  const isLoading = useSelector(getAlbumIsLoading)
  const error = useSelector(getAlbumIsError)
  const hasMany = useSelector(getAlbumHasMany)
  console.log(albumList)
  useEffect(() => {
    dispatch(fetchAlbumList({}))
  }, [dispatch])

  const onLoadNextPage = useCallback(() => {
    if (hasMany) {
      dispatch(fetchNextArticlesPage())
    }
  }, [dispatch, hasMany])

  return (
    <PageWrapper className={styles.AlbumPage} onScrollEnd={onLoadNextPage}>
      {error && (
        <>
          <Typography align={TypographyAlign.CENTER}>
            {t("errorOnLoadAlbum")}
          </Typography>
          <Typography align={TypographyAlign.CENTER}>{error}</Typography>
        </>
      )}
      <AlbumPageFilters />

      <AlbumList isLoading={isLoading} albums={albumList} />
    </PageWrapper>
  )
}
