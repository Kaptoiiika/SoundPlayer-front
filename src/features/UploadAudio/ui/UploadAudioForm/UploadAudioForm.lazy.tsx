import { lazy } from "react"

export const UploadAudioFormLazy = lazy(() =>
  import("./UploadAudioForm").then((module) => ({
    default: module.UploadAudioForm,
  }))
)
