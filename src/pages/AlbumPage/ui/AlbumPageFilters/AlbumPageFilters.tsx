import { getAlbumOrder } from "pages/AlbumPage/model/selectors/albumPageSelectors"
import { fetchAlbumList } from "pages/AlbumPage/model/services/fetchAlbumList/fetchAlbumList"
import { albumPageActions } from "pages/AlbumPage/model/slice/albumPageSlice"
import { useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { SortOrder } from "shared/types"
import { Select } from "shared/ui/Select/Select"

export const AlbumPageFilters = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const order = useSelector(getAlbumOrder)

  const orderOptions = useMemo(() => [SortOrder.ASC, SortOrder.DESC], [])

  const onSortChange = useCallback(
    (newValue: SortOrder | undefined) => {
      dispatch(albumPageActions.setOrder(newValue))
      dispatch(fetchAlbumList({ replace: true }))
    },
    [dispatch]
  )

  return (
    <Select
      value={order}
      label={t("SortBy")}
      options={orderOptions}
      onChange={onSortChange}
    />
  )
}
