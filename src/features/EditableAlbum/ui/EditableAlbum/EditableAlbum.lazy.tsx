import { lazy } from "react"

export const EditableAlbum = lazy(() =>
  import("./EditableAlbum").then((module) => ({
    default: module.EditableAlbum,
  }))
)
