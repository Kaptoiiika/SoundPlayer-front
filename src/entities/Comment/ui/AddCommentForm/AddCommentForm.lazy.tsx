import { lazy } from "react"

export const AddCommentFormLazy = lazy(() =>
  import("./AddCommentForm").then((module) => ({
    default: module.AddCommentForm,
  }))
)
