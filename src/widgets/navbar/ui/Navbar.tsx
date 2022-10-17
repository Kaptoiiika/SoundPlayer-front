import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { routeConfig, RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/lib/ui/AppLink/AppLink"
import styles from "./Navbar.module.scss"
import Logo from "shared/assets/icons/Logo.png"

type NavbarProps = {
  className?: string
}

const links = [
  {
    to: RoutePaths.main,
    title: "Home",
  },
  {
    to: RoutePaths.audio,
    title: "audio",
  },
]

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  const [currentPage, setCurrentPage] = useState(location.pathname)

  const hundleChangePage = (link: string) => {
    setCurrentPage(link)
  }

  return (
    <div className={classNames([styles.navbar, className])}>
      <div className={styles.appLinks}>
        <img className={styles.logo} src={Logo} />
        {links.map((link) => (
          <AppLink
            variant={
              currentPage === link.to
                ? AppLinkTheme.ACTIVE
                : AppLinkTheme.SECONDARY
            }
            key={link.to}
            to={link.to}
            onClick={() => hundleChangePage(link.to)}
          >
            {link.title}
          </AppLink>
        ))}
      </div>
      <div className={styles.appLinks}>
        <AppLink
          variant={AppLinkTheme.PRIMARY}
          to={"/login"}
          onClick={() => hundleChangePage("/login")}
        >
          {"sign up"}
        </AppLink>
      </div>
    </div>
  )
}
