import { StateSchema } from "@/shared/config/storeConfig"

export const getAlbumDetails = (state: StateSchema) => state.albumDetails

export const getAlbumDetailsData = (state: StateSchema) =>
  state.albumDetails?.albums

export const getAlbumDetailsError = (state: StateSchema) =>
  state.albumDetails?.error

export const getAlbumDetailsIsLoading = (state: StateSchema) =>
  state.albumDetails?.isLoading || false

export const getSelectedAlbumDetails = (state: StateSchema) =>
  state.albumDetails?.selectedAlbum
