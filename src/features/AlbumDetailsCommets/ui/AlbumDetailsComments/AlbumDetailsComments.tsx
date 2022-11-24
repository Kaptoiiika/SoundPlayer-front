import { AddCommentForm, CommentList } from "entities/Comment"
import {
  getAlbumComments,
  getAlbumDetailsCommentsIsloading,
} from "../../model/selectors/getAlbumComments/getAlbumComments"
import { fetchCommentsByAlbumId } from "../../model/services/fetchCommentsByAlbumId"
import { albumDetailsCommentsReducer } from "../../model/slice/albumDetailsCommetsSlice"
import { useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Typography, TypographySize } from "shared/ui/Typography/Typography"
import styles from "./AlbumDetailsComments.module.scss"
import { addCommentForAlbume } from "features/AlbumDetailsCommets/model/services/addCommentForAlbum"

type AlbumDetailsCommentsProps = {
  id: string
}

export const AlbumDetailsComments = (props: AlbumDetailsCommentsProps) => {
  useDynamicModuleLoader({
    reducers: { albumDetailsCommets: albumDetailsCommentsReducer },
  })
  const { id } = props
  const comments = useSelector(getAlbumComments.selectAll)
  const { t } = useTranslation()
  const isLoading = useSelector(getAlbumDetailsCommentsIsloading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!comments.length) dispatch(fetchCommentsByAlbumId(id))
  }, [comments, dispatch, id])

  const onSendComent = useCallback(
    (text: string) => {
      dispatch(addCommentForAlbume({ albumId: id, comment: text }))
    },
    [dispatch, id]
  )

  return (
    <div className={styles.AlbumDetailsComments}>
      <Typography size={TypographySize.L}>{t("Comments")}</Typography>

      <AddCommentForm onSendComment={onSendComent} />
      <CommentList commetList={comments} isLoading={isLoading} />
    </div>
  )
}
