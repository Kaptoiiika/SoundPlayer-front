import { useCallback, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Waveform.module.scss"

type WaveformProps = {
  className?: string
  dataArray?: number[]
  fill?: number
  barOffset?: number
  width?: number
  minThreshold?: number
  heightMultiplier?: number
  color?: string | CanvasGradient | CanvasPattern
  fillColor?: string | CanvasGradient | CanvasPattern
  onDurationClick?: (time: number) => void
}

export const Waveform = (props: WaveformProps) => {
  const {
    fill = 0,
    barOffset = 1,
    width = 300,
    minThreshold = 4,
    dataArray = [0, 0],
    heightMultiplier = 1,
    color = "#979797",
    fillColor = "#fff",
    className = "",
    onDurationClick = () => {},
  } = props
  const [canvas, setCanvas] = useState<HTMLCanvasElement>()

  if (canvas) {
    const barMargin = barOffset * 0.5

    const ctx = canvas.getContext("2d")!

    const WIDTH = canvas.width
    const HEIGHT = canvas.height

    const barWidth = WIDTH / dataArray.length

    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    dataArray.forEach((value: number, index: number) => {
      if (index % barOffset) return
      if (index >= fill * dataArray.length) ctx.fillStyle = color
      else ctx.fillStyle = fillColor

      const realBarHeight = (value / 256) * HEIGHT * heightMultiplier
      const barHeight =
        realBarHeight > minThreshold ? realBarHeight : minThreshold

      ctx.fillRect(
        index * barWidth,
        (HEIGHT - barHeight) / 2,
        barWidth * barOffset - barMargin,
        barHeight
      )
    })
  }

  const handleCanvas = useCallback((node: HTMLCanvasElement) => {
    setCanvas(node)
  }, [])

  return (
    <div className={classNames([styles.Waveform, className])}>
      <input
        className={styles.slider}
        type="range"
        value={fill || 0}
        min="0"
        max="1"
        step="0.001"
        onChange={(e) => {
          onDurationClick(Number(e.currentTarget.value))
        }}
      />
      <canvas
        style={{ width: width }}
        ref={handleCanvas}
        width={width * 2}
        height={(width * 2) / 7}
      />
    </div>
  )
}
