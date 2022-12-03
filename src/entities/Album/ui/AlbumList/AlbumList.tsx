import { AlbumModel } from "../../model/types/AlbumSchema"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AlbumList.module.scss"
import { AlbumListItem } from "../AlbumListItem/AlbumListItem"
import { AlbumListItemSkeleton } from "../AlbumListItem/AlbumListItemSkeleton"

type AlbumListProps = {
  className?: string
  isLoading?: boolean
  albums?: AlbumModel[]
}

export const AlbumList = (props: AlbumListProps) => {
  const { className = "", albums, isLoading } = props

  return (
    <div className={classNames([styles.AlbumList, className])}>
      
      {albums?.length
        ? albums.map((album) => <AlbumListItem key={album.id} album={album} />)
        : null}
      {isLoading && (
        <>
          <AlbumListItemSkeleton />
          <AlbumListItemSkeleton />
          <AlbumListItemSkeleton />
          <AlbumListItemSkeleton />
          <AlbumListItemSkeleton />
          <AlbumListItemSkeleton />
        </>
      )}
    </div>
  )
}
