import { lazy } from "react"

export const AlbumDetailsPagelazy = lazy(() =>
  import("./AlbumDetailsPage").then((module) => ({
    default: module.AlbumDetailsPage,
  }))
)
