import { lazy } from "react"

export const CropImageLazy = lazy(() =>
  import("./CropImage").then((module) => ({
    default: module.CropImage,
  }))
)
