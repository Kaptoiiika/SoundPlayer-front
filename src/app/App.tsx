import { AppRouter } from "./providers/Router/ui/AppRouter"
import { Navbar } from "widgets/navbar/"
import { Suspense } from "react"
import { FooterAudioPlayer } from "widgets/FooterAudioPlayer"

const App = () => {
  return (
    <div className={`app`}>
      <Suspense>
        <Navbar />
        <div className="page-layer">
          <AppRouter />
        </div>
        <FooterAudioPlayer />
      </Suspense>
    </div>
  )
}

export default App
