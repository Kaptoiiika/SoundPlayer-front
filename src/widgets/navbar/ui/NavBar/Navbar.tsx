import { useMemo } from "react"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import styles from "./Navbar.module.scss"
import Logo from "shared/assets/icons/Logo.png"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"
import { useSelector } from "react-redux"
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData"
import { useLocation } from "react-router-dom"

type NavbarProps = {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className = "" } = props

  const authData = useSelector(getAuthData)
  const location = useLocation()
  const { t } = useTranslation()

  const links = useMemo(
    () => [
      {
        to: RoutePaths.main,
        title: t("homePage"),
      },
      {
        to: RoutePaths.audio,
        title: t("audioPage"),
      },
    ],
    [t]
  )

  return (
    <div className={classNames([styles.navbar, className])}>
      <div className={styles.appLinks}>
        <AppLink
          variant={AppLinkTheme.SECONDARY}
          className={styles.logo}
          to={RoutePaths.main}
        >
          <img className={styles.logo} src={Logo} />
        </AppLink>
        {links.map((link) => (
          <AppLink
            variant={
              location.pathname === link.to
                ? AppLinkTheme.ACTIVE
                : AppLinkTheme.SECONDARY
            }
            key={link.to}
            to={link.to}
            title={link.title}
          />
        ))}
      </div>

      <div className={styles.appLinks}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        {authData ? (
          <AppLink
            variant={AppLinkTheme.PRIMARY}
            to={RoutePaths.proifle + "me"}
            className={styles.authUsername}
            title={authData.username}
          />
        ) : (
          <AppLink
            variant={AppLinkTheme.PRIMARY}
            to={RoutePaths.auth}
            title={t("signIn")}
          />
        )}
      </div>
    </div>
  )
}
