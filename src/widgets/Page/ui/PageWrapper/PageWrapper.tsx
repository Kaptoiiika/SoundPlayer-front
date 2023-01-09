import { MutableRefObject, PropsWithChildren, UIEvent, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getScrollSaverByPath, scrollSaverActions } from "@/features/ScrollSaver"
import { StateSchema } from "@/shared/config/storeConfig"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import { useMountedEffect } from "@/shared/lib/hooks/useMountedEffect/useMountedEffect"
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle"
import styles from "./PageWrapper.module.scss"

type PageWrapperProps = {
  className?: string
  onScrollEnd?: () => void
} & PropsWithChildren

export const PageWrapper = (props: PageWrapperProps) => {
  const { children, className, onScrollEnd } = props
  const wrapperRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement>
  const triggerRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const location = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaverByPath(state, location.pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useMountedEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(
      scrollSaverActions.setScrollPosition({
        path: location.pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  }, 500)

  return (
    <main
      ref={wrapperRef}
      className={classNames([styles.scrollWrapper, className])}
      onScroll={onScroll}
    >
      <div className={styles.PageWrapper}>{children}</div>
      <div className={styles.scrollTrigger} ref={triggerRef} />
    </main>
  )
}
