import { useCallback, useMemo, useState } from "react"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import styles from "./Navbar.module.scss"
import Logo from "shared/assets/icons/Logo.png"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"

type NavbarProps = {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className = "" } = props

  const [currentPage, setCurrentPage] = useState(location.pathname)
  const { t } = useTranslation()

  const hundleChangePage = useCallback((link: string) => {
    setCurrentPage(link)
  }, [])

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
          onLinkClick={hundleChangePage}
        >
          <img className={styles.logo} src={Logo} />
        </AppLink>
        {links.map((link) => (
          <AppLink
            variant={
              currentPage === link.to
                ? AppLinkTheme.ACTIVE
                : AppLinkTheme.SECONDARY
            }
            key={link.to}
            to={link.to}
            title={link.title}
            onLinkClick={hundleChangePage}
          />
        ))}
      </div>

      <div className={styles.appLinks}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <AppLink
          variant={AppLinkTheme.PRIMARY}
          to={RoutePaths.auth}
          title={t("signIn")}
          onLinkClick={hundleChangePage}
        />
      </div>
    </div>
  )
}
