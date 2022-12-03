import { createSelector } from "@reduxjs/toolkit"
import { getSelectedAlbumDetails } from "entities/Album"
import { getAuthData } from "entities/User"

export const getCanEditAlbum = createSelector(
  getAuthData,
  getSelectedAlbumDetails,
  (userData, albumData): boolean => {
    if (!userData?.id || !albumData?.author?.id) return false

    return userData?.id == albumData?.author?.id
  }
)
