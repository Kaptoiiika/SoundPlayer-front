import { Suspense } from "react"
import { FooterAudioPlayer } from "@/widgets/FooterAudioPlayer"
import { Navbar } from "@/widgets/Navbar/"
import { AppRouter } from "./providers/Router/ui/AppRouter"

const App = () => {
  return (
    <div className={`app`}>
      <Suspense>
        <Navbar />
        <AppRouter />
        <FooterAudioPlayer />
      </Suspense>
    </div>
  )
}

export default App
