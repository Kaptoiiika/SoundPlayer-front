import { AppRouter } from "./providers/Router/ui/AppRouter"
import { Navbar } from "widgets/navbar/"
import { Suspense } from "react"

const App = () => {
  return (
    <div className={`app`}>
      <Suspense>
        <Navbar />
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
