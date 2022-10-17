import { ThemeProvider } from "app/providers/ThemeProvider"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app/App"

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

import { Link } from "react-router-dom"
import { routeConfig, RoutePaths } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./NavBar.module.scss"

type NavBarProps = {
  className?: string
}

export const NavBar = (props: NavBarProps) => {
  const { className } = props
  return <div className={classNames(["", className])}></div>
}
