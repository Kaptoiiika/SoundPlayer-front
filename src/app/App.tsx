import { BrowserRouter } from "react-router-dom"
import "app/styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "./providers/Router/ui/AppRouter"
import { Navbar } from "widgets/navbar/"

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Navbar />
        <button style={{ padding: 16 }} onClick={() => toggleTheme()}>
          {theme}
        </button>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
