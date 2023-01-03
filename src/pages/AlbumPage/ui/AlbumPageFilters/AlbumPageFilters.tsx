import { useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getAlbumOrder } from "pages/AlbumPage/model/selectors/albumPageSelectors"
import { fetchAlbumList } from "pages/AlbumPage/model/services/fetchAlbumList/fetchAlbumList"
import { albumPageActions } from "pages/AlbumPage/model/slice/albumPageSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { SortOrder } from "shared/types"
import { ListBox } from "shared/ui/Popups"
import { HStack } from "shared/ui/Stack"
import { Typography } from "shared/ui/Typography/Typography"

export const AlbumPageFilters = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const order = useSelector(getAlbumOrder)

  const orderOptions = useMemo(
    () => [SortOrder.NONE, SortOrder.ASC, SortOrder.DESC],
    []
  )

  const onSortChange = useCallback(
    (newValue: SortOrder | undefined) => {
      dispatch(albumPageActions.setOrder(newValue))
      dispatch(fetchAlbumList({ replace: true }))
    },
    [dispatch]
  )

  const optionLabel = useCallback(
    (option: SortOrder) => t(option) || "nothing",
    [t]
  )

  return (
    <HStack gap="8">
      <Typography>{t("SortBy")} </Typography>
      <ListBox
        value={order}
        optionLabel={optionLabel}
        items={orderOptions}
        onChange={onSortChange}
      />
    </HStack>
  )
}
