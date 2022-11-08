import { lazy } from "react"

export const UploadImageLazy = lazy(() =>
  import("./UploadImage").then((module) => ({
    default: module.UploadImage,
  }))
)
