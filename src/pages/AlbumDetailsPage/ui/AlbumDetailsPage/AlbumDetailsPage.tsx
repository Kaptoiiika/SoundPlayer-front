import { AlbumDetails } from "entities/Album"
import { AlbumDetailsComments } from "features/AlbumDetailsCommets/ui/AlbumDetailsComments/AlbumDetailsComments"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { PageWrapper } from "widgets/Page"
import { AlbumDetailsPageHeader } from "../AlbumDetailsPageHeader/AlbumDetailsPageHeader"
import styles from "./AlbumDetailsPage.module.scss"

export const AlbumDetailsPage = memo(() => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames([styles.ArticleDetailsPage])}>
        {t("AlbumNotFound")}
      </div>
    )
  }

  return (
    <PageWrapper className={classNames([styles.AlbumPage])}>
      <AlbumDetailsPageHeader />
      <AlbumDetails id={id} />
      <AlbumDetailsComments id={id} />
    </PageWrapper>
  )
})
