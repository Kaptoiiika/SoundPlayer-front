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
} & LinkProps &
  React.PropsWithChildren

export const AppLink = (props: AppLinkProps) => {
  const {
    variant = AppLinkTheme.PRIMARY,
    className,
    to,
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
      {children}
    </Link>
  )
}
