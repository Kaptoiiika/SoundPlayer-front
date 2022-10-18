import "app/styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "./providers/Router/ui/AppRouter"
import { Navbar } from "widgets/navbar/"
import { Suspense } from "react"

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Suspense>
        <Navbar />
        <button style={{ padding: 16 }} onClick={() => toggleTheme()}>
          {theme}
        </button>
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
