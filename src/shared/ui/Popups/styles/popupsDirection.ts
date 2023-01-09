import { classNames } from "@/shared/lib/classNames/classNames"
import type { HorizontalDirection, VerticalDirection } from "@/shared/types/ui"
import styles from "./popupsStyle.module.scss"

export type PopupsDirections = {
  horizontal?: HorizontalDirection
  vertical?: VerticalDirection
}

export const popupsDirection = (
  direction?: PopupsDirections
): string | undefined => {
  const horizontal = direction?.horizontal || "left"
  const vertical = direction?.vertical || "bottom"

  return classNames([styles[horizontal], styles[vertical]])
}
