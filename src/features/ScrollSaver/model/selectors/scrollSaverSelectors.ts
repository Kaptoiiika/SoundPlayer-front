import { createSelector } from "@reduxjs/toolkit"
import { StateSchema } from "@/shared/config/storeConfig"

export const getScrollSaver = (state: StateSchema) => state.scrollSaver.scroll

export const getScrollSaverByPath = createSelector(
  getScrollSaver,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)
