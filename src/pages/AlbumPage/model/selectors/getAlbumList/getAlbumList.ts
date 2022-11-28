import { StateSchema } from "app/providers/StoreProvider"
import { albumListAdapter } from "../../slice/albumPageSlice"

export const getAlbumList = albumListAdapter.getSelectors<StateSchema>(
  (state) => state.albumPage || albumListAdapter.getInitialState()
)

export const getAlbumIsLoading = (state: StateSchema) =>
  state.albumPage?.isLoading
export const getAlbumIsError = (state: StateSchema) => state.albumPage?.error
