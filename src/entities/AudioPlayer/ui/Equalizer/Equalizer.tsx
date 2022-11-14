import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import styles from "./Equalizer.module.scss"

type Props = {
  analyser: AnalyserNode
}

export const Equalizer = memo((props: Props) => {
  const { analyser } = props
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const [canvas, setCanvas] = useState<HTMLCanvasElement>()
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()

  const bufferLength = useMemo(() => analyser.frequencyBinCount, [analyser])
  const dataArray = useMemo(() => new Uint8Array(bufferLength), [bufferLength])

  const animate = (time: any) => {
    // Это удалит requestAnimationFrame(animate)
    // и если у нас появится canvas, useEffect вернет requestAnimationFrame(animate)
    if (!ctx || !canvas)
      return cancelAnimationFrame(requestRef.current as number)

    const WIDTH = canvas.width
    const HEIGHT = canvas.height

    const barWidth = WIDTH / bufferLength / 2

    analyser.getByteFrequencyData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dataArray.forEach((value: number, index: number) => {
      // ctx.fillStyle = scaleFn(value)
      ctx.fillStyle = "#fff"

      if (!index) {
        ctx.fillRect(WIDTH / 2, HEIGHT - value / 2, barWidth, value / 2)
        return
      }

      ctx.fillRect(
        WIDTH / 2 + index * barWidth,
        HEIGHT - value / 2,
        barWidth,
        value / 2
      )

      ctx.fillRect(
        WIDTH / 2 - index * barWidth,
        HEIGHT - value / 2,
        barWidth,
        value / 2
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

  return <canvas className={styles.Equalizer} ref={handleCanvas} width="1920" />
})
