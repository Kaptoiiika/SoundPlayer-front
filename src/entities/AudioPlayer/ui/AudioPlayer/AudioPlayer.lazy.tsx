import { lazy } from "react"

export const AudioPlayerLazy = lazy(() =>
  import("./AudioPlayer").then((module) => ({
    default: module.AudioPlayer,
  }))
)
