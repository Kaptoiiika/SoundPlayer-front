import { StateSchema } from "shared/config/storeConfig"

export const getAddCommentFormText = (state: StateSchema) =>
  state.addCommentForm?.text
export const getAddCommentFormError = (state: StateSchema) =>
  state.addCommentForm?.error
