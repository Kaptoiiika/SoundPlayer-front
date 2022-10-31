import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"

type ThemeSwitcherProps = {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className = "" } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={classNames(["", className])} onClick={toggleTheme}>
      {theme}
    </button>
  )
}
