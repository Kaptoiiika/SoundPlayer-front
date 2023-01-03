import { createEntityAdapter } from "@reduxjs/toolkit"
import type { AlbumModel } from "entities/Album"

export const albumListAdapter = createEntityAdapter<AlbumModel>({
  selectId: (album) => album.id,
})
