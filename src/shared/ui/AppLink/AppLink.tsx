import { memo, useCallback } from "react"
import { Link, LinkProps } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AppLink.module.scss"

export const enum AppLinkTheme {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ACTIVE = "active",
}

type AppLinkProps = {
  className?: string
  variant?: AppLinkTheme
  title?: string
  onLinkClick?: (link: string) => void
  to?: string
} & LinkProps

export const AppLink = memo((props: AppLinkProps) => {
  const {
    variant = AppLinkTheme.DEFAULT,
    className = "",
    to,
    title,
    onLinkClick,
    children,
    ...otherProps
  } = props

  const onClickHundle = useCallback(() => {
    onLinkClick?.(to)
  }, [onLinkClick, to])

  return (
    <Link
      to={to}
      className={classNames([styles.AppLink, styles[variant], className])}
      onClick={onClickHundle}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {title}
      {children}
    </Link>
  )
})
