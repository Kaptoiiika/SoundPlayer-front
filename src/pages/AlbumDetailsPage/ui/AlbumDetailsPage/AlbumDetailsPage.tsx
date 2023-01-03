import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { PageWrapper } from "widgets/Page"
import { AlbumDetailsComments } from "features/AlbumDetailsCommets/ui/AlbumDetailsComments/AlbumDetailsComments"
import { AlbumDetails } from "entities/Album"
import { classNames } from "shared/lib/classNames/classNames"
import { AlbumDetailsPageHeader } from "../AlbumDetailsPageHeader/AlbumDetailsPageHeader"
import styles from "./AlbumDetailsPage.module.scss"

export const AlbumDetailsPage = memo(() => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <PageWrapper className={classNames([styles.ArticleDetailsPage])}>
        {t("AlbumNotFound")}
      </PageWrapper>
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
