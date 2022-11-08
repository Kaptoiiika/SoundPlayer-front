import { lazy } from "react"

export const AudioPageLazy = lazy(() =>
  import("./AudioPage").then((module) => ({
    default: module.AudioPage,
  }))
)
