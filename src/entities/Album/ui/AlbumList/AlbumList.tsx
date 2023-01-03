import { HStack } from "shared/ui/Stack"
import { AlbumModel } from "../../model/types/AlbumSchema"
import { AlbumListItem } from "../AlbumListItem/AlbumListItem"
import { AlbumListItemSkeleton } from "../AlbumListItem/AlbumListItemSkeleton"

type AlbumListProps = {
  className?: string
  isLoading?: boolean
  albums?: AlbumModel[]
}

export const AlbumList = (props: AlbumListProps) => {
  const { className, albums, isLoading } = props

  return (
    <HStack wrap="wrap" align="stretch" gap="32" className={className}>
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
    </HStack>
  )
}
