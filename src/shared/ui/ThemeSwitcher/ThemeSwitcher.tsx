import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "shared/lib/hooks/useTheme/useTheme"

type ThemeSwitcherProps = {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={classNames(["", className])} onClick={toggleTheme}>
      {theme}
    </button>
  )
})
