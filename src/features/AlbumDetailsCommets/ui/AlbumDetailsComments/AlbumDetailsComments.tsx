import { AddCommentForm, CommentList } from "entities/Comment"
import {
  getAlbumComments,
  getAlbumDetailsCommentsIsloading,
} from "../../model/selectors/getAlbumComments/getAlbumComments"
import { fetchCommentsByAlbumId } from "../../model/services/fetchCommentsByAlbumId"
import { albumDetailsCommentsReducer } from "../../model/slice/albumDetailsCommetsSlice"
import { memo, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Typography, TypographySize } from "shared/ui/Typography/Typography"
import styles from "./AlbumDetailsComments.module.scss"
import { addCommentForAlbume } from "features/AlbumDetailsCommets/model/services/addCommentForAlbum"
import { getAuthData } from "entities/User"

type AlbumDetailsCommentsProps = {
  id: string
}

export const AlbumDetailsComments = memo((props: AlbumDetailsCommentsProps) => {
  useDynamicModuleLoader({
    reducers: { albumDetailsCommets: albumDetailsCommentsReducer },
  })
  const { id } = props
  const { t } = useTranslation()
  const comments = useSelector(getAlbumComments.selectAll)
  const isAuth = useSelector(getAuthData)
  const isLoading = useSelector(getAlbumDetailsCommentsIsloading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCommentsByAlbumId(id))
  }, [dispatch, id])

  const onSendComent = useCallback(
    (text: string) => {
      dispatch(addCommentForAlbume({ albumId: id, comment: text }))
    },
    [dispatch, id]
  )

  return (
    <div className={styles.AlbumDetailsComments}>
      <Typography size={TypographySize.L}>{t("Comments")}</Typography>

      {isAuth && <AddCommentForm onSendComment={onSendComent} />}
      <CommentList commetList={comments} isLoading={isLoading} />
    </div>
  )
})
