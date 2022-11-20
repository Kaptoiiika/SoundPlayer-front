import { StateSchema } from "app/providers/StoreProvider"
import { AlbumType } from "../../types/AlbumSchema"

export const getAlbumDetails = (state: StateSchema) => state.albumDetails

export const getAlbumDetailsData = (state: StateSchema) =>
  state.albumDetails?.album 
  
export const getAlbumDetailsError = (state: StateSchema) =>
  state.albumDetails?.error

export const getAlbumDetailsIsLoading = (state: StateSchema) =>
  state.albumDetails?.isLoading || false
