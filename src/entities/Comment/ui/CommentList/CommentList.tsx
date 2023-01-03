import { memo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography } from "shared/ui/Typography/Typography"
import { CommentModel } from "../../model/types/CommentModel"
import { CommentCard } from "../CommentCard/CommentCard"
import styles from "./CommentList.module.scss"

type CommentListProps = {
  className?: string
  commetList?: CommentModel[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, commetList } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames([styles.CommentList, className])}>
        <CommentCard />
        <CommentCard />
      </div>
    )
  }
  return (
    <div className={classNames([styles.CommentList, className])}>
      {commetList?.length ? (
        commetList.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      ) : (
        <Typography>{t("noCommentsYet")}</Typography>
      )}
    </div>
  )
})
