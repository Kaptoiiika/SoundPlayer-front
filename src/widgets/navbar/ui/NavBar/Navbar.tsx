import { useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getAuthData } from "@/entities/User/model/selectors/getAuthData/getAuthData"
import { logoutUser } from "@/entities/User/model/services/logoutUser/logoutUser"
import Logo from "@/shared/assets/icons/Logo.png"
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink"
import { Button } from "@/shared/ui/Button/Button"
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher/LanguageSwitcher"
import { Dropdown, Popover } from "@/shared/ui/Popups"
import { HStack } from "@/shared/ui/Stack"
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher"
import styles from "./Navbar.module.scss"

type NavbarProps = {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  const dispatch = useAppDispatch()
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

  const hundlerLogout = useCallback(() => {
    console.log("logout")
    dispatch(logoutUser())
  }, [dispatch])

  return (
    <header className={classNames([styles.navbar, className])}>
      <div className={styles.wrapper}>
        <HStack gap="8" align="center">
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
        </HStack>

        <HStack gap="8" align="center">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Popover button={<Button>{"lox"}</Button>}>
            {
              "Minim sunt exercitation fugiat occaecat fugiat tempor sunt ipsum officia laboris eiusmod."
            }
          </Popover>
          {authData ? (
            <Dropdown
              items={[
                {
                  content: t("My profile"),
                  link: RoutePaths.my_profile,
                },
                {
                  content: t("logout"),
                  onClick: hundlerLogout,
                },
              ]}
              label={authData.username}
            />
          ) : (
            <AppLink
              variant={AppLinkTheme.PRIMARY}
              to={RoutePaths.auth}
              title={t("signIn")}
            />
          )}
        </HStack>
      </div>
    </header>
  )
}
