import { memo } from "react"
import { Link } from "react-router-dom"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar"
import { Paper } from "shared/ui/Paper/Paper"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./AlbumListItem.module.scss"

type AlbumListItemProps = {
  album: AlbumModel
}

export const AlbumListItem = memo((props: AlbumListItemProps) => {
  const { album } = props
  return (
    <Link
      className={styles.AlbumListItem}
      to={RoutePaths.album_details + album.id}
    >
      <Paper className={styles.content}>
        <div className={styles.avatarWrapper}>
          <Avatar size={AvatarSize.AUTO} square avatar={album.image} />
        </div>
        <div className={styles.info}>
          <Typography bold oneLine>
            {album.title}
          </Typography>
          <Typography oneLine>{album.author?.username}</Typography>
        </div>
      </Paper>
    </Link>
  )
})
