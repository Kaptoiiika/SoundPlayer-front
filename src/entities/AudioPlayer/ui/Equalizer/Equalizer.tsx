import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import styles from "./Equalizer.module.scss"

type Props = {
  analyser: AnalyserNode
}

export const Equalizer = (props: Props) => {
  const { analyser } = props
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const [canvas, setCanvas] = useState<HTMLCanvasElement>()
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()

  const bufferLength = useMemo(() => analyser.frequencyBinCount, [analyser])
  const dataArray = useMemo(() => new Uint8Array(bufferLength), [bufferLength])

  const animate = (time: any) => {
    if (!ctx || !canvas)
      return cancelAnimationFrame(requestRef.current as number)

    const WIDTH = canvas.width
    const HEIGHT = canvas.height

    const barWidth = WIDTH / bufferLength / 2

    analyser.getByteFrequencyData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dataArray.forEach((value, index) => {
      const red = value  + 32
      const green = 198 - value / 8
      const blue = value / 4 + 32
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`

      const formatedValue = (value / 255) * HEIGHT

      if (index === 0) {
        ctx.fillRect(WIDTH / 2, HEIGHT - formatedValue, barWidth, formatedValue)
        return
      }

      ctx.fillRect(
        WIDTH / 2 + index * barWidth,
        HEIGHT - formatedValue,
        barWidth,
        formatedValue
      )

      ctx.fillRect(
        WIDTH / 2 - index * barWidth,
        HEIGHT - formatedValue,
        barWidth,
        formatedValue
      )
    })

    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  const handleCanvas = useCallback((node: HTMLCanvasElement) => {
    setCanvas(node)
    const context = node.getContext("2d")
    if (context) {
      context.globalCompositeOperation = "destination-over"

      setCtx(context)
    }
  }, [])

  useEffect(() => {
    if (!canvas) return
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current as number)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas])

  return (
    <canvas
      className={styles.Equalizer}
      ref={handleCanvas}
      width={window.innerWidth * 2}
    />
  )
}
