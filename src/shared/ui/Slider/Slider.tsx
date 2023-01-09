import { ChangeEvent, memo, useCallback } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import styles from "./Slider.module.scss"

type SliderProps = {
  className?: string
  onValueChange?: (value: number) => void
  value?: number
  min?: number
  max?: number
}

export const Slider = memo((props: SliderProps) => {
  const { className, max, min, onValueChange, value } = props

  const hundleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.currentTarget.value)
      onValueChange?.(newValue)
    },
    [onValueChange]
  )

  return (
    <input
      className={classNames([styles.slider, className])}
      onChange={hundleOnChange}
      type="range"
      value={value}
      min={min}
      max={max}
    />
  )
})
