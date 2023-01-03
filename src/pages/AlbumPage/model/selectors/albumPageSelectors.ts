import { StateSchema } from "shared/config/storeConfig"
import { albumListAdapter } from "../slice/albumListAdapter"

export const getAlbumList = albumListAdapter.getSelectors<StateSchema>(
  (state) => state.albumPage || albumListAdapter.getInitialState()
)

export const getAlbumIsLoading = (state: StateSchema) =>
  state.albumPage?.isLoading

export const getAlbumIsError = (state: StateSchema) => state.albumPage?.error
export const getAlbumPageNum = (state: StateSchema) =>
  state.albumPage?.page || 1
export const getAlbumPageLimit = (state: StateSchema) =>
  state.albumPage?.limit || 25
export const getAlbumHasMany = (state: StateSchema) => state.albumPage?.hasMany
export const getAlbumOrder = (state: StateSchema) => state.albumPage?.order
