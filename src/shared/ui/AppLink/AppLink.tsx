import { memo } from "react"
import { Link, LinkProps } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AppLink.module.scss"

export const enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ACTIVE = "active",
}

type AppLinkProps = {
  className?: string
  variant?: AppLinkTheme
  title?: string
} & LinkProps

export const AppLink = memo((props: AppLinkProps) => {
  const {
    variant = AppLinkTheme.PRIMARY,
    className = "",
    to,
    title,
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
    </Link>
  )
})
