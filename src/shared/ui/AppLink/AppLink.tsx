import { memo } from "react"
import { Link, LinkProps, To } from "react-router-dom"
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
  to?: To
} & LinkProps

export const AppLink = memo((props: AppLinkProps) => {
  const {
    variant = AppLinkTheme.DEFAULT,
    className = "",
    to,
    title,
    children,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames([styles.AppLink, styles[variant], className])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {title}
      {children}
    </Link>
  )
})
