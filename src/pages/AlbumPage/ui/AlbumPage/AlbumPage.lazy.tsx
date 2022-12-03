import { lazy } from "react"

export const AlbumPagelazy = lazy(() =>
  import("./AlbumPage").then((module) => ({
    default: module.AlbumPage,
  }))
)
