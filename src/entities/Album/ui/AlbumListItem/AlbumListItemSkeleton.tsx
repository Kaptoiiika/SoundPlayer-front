import { Paper } from "@/shared/ui/Paper/Paper"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import styles from "./AlbumListItem.module.scss"

export const AlbumListItemSkeleton = () => {
  return (
    <div className={styles.AlbumListItem}>
      <Paper className={styles.content}>
        <div className={styles.avatarWrapper}>
          <Skeleton width={"100%"} height={"100%"} />
        </div>
        <div className={styles.info}>
          <Skeleton width={"100%"} height={"16px"} />
          <Skeleton margin={"4px 0"} height={"16px"} width={120} />
        </div>
      </Paper>
    </div>
  )
}
