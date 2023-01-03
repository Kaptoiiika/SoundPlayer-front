import { StateSchema } from "shared/config/storeConfig"

export const getEditableAlbumTitle = (state: StateSchema) =>
  state.editableAlbum?.title ?? ""

export const getEditableAlbumImage = (state: StateSchema) =>
  state.editableAlbum?.image

  export const getSelectedEditableAlbum = (state: StateSchema) =>
  state.editableAlbum?.selectedAlbum
