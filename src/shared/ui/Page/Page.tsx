import { MutableRefObject, PropsWithChildren, useRef } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import styles from "./Page.module.scss"

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

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames([styles.scrollWrapper, className])}
    >
      <div className={styles.PageWrapper}>{children}</div>
      <div className={styles.scrollTrigger} ref={triggerRef} />
    </section>
  )
}
