import { AlbumDetails } from "entities/Album"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AlbumDetailsPage.module.scss"

type AlbumDetailsPageProps = {
  className?: string
}

export const AlbumDetailsPage = memo((props: AlbumDetailsPageProps) => {
  const { className = "" } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames([styles.ArticleDetailsPage, className])}>
        {t("AlbumNotFound")}
      </div>
    )
  }

  return (
    <div className={classNames(["", className])}>
      <AlbumDetails id={id} />
    </div>
  )
})
