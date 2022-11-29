import { StateSchema } from "app/providers/StoreProvider"
import { getScrollSaverByPath, scrollSaverActions } from "features/ScrollSaver"
import {
  MutableRefObject,
  PropsWithChildren,
  UIEvent,
  useEffect,
  useRef,
} from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle"
import styles from "./PageWrapper.module.scss"

type PageWrapperProps = {
  className?: string
  onScrollEnd?: () => void
} & PropsWithChildren

export const PageWrapper = (props: PageWrapperProps) => {
  const { children, className = "", onScrollEnd } = props
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

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(
      scrollSaverActions.setScrollPosition({
        path: location.pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  }, 500)

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      ref={wrapperRef}
      className={classNames([styles.scrollWrapper, className])}
      onScroll={onScroll}
    >
      <div className={styles.PageWrapper}>{children}</div>
      {onScrollEnd && <div className={styles.scrollTrigger} ref={triggerRef} />}
    </section>
  )
}
